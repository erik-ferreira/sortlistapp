import { useState } from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
  runOnJS,
  withSpring,
  SharedValue,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
} from "react-native-reanimated"

import { Card, CardProps } from "../Card"

import { CARD } from "../../utils/constants"

import { styles } from "./styles"

interface MovableCardProps {
  data: CardProps
  cardsPosition: SharedValue<number[]>
  scrollY: SharedValue<number>
  totalCards: number
}

export function MovableCard({
  data,
  cardsPosition,
  scrollY,
  totalCards,
}: MovableCardProps) {
  const top = useSharedValue(cardsPosition.value[data.id] * CARD.TOTAL_HEIGHT)
  const [moving, setMoving] = useState(false)

  function objectMove(positions: number[], from: number, to: number) {
    "worklet"
    const newPositions = Object.assign({}, positions)

    for (const id in positions) {
      if (positions[id] === from) {
        newPositions[id] = to
      }

      if (positions[id] === to) {
        newPositions[id] = from
      }
    }

    return newPositions
  }

  useAnimatedReaction(
    () => cardsPosition.value[data.id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition) {
        if (!moving) {
          top.value = withSpring(currentPosition * CARD.TOTAL_HEIGHT)
        }
      }
    },
    [moving]
  )

  const longPressGesture = Gesture.LongPress()
    .minDuration(200)
    .onStart(() => {
      runOnJS(setMoving)(true)
    })

  const panGesture = Gesture.Pan()
    .manualActivation(true)
    .onTouchesMove((_, state) => {
      moving ? state.activate() : state.fail()
    })
    .onUpdate((event) => {
      const positionY = event.absoluteY + scrollY.value
      top.value = positionY - CARD.TOTAL_HEIGHT

      const startPositionList = 0
      const endPositionList = totalCards - 1
      const currentPosition = Math.floor(positionY / CARD.TOTAL_HEIGHT)

      ;("worklet")
      const newPosition = Math.max(
        startPositionList,
        Math.min(currentPosition, endPositionList)
      )

      if (newPosition !== cardsPosition.value[data.id]) {
        cardsPosition.value = objectMove(
          cardsPosition.value,
          cardsPosition.value[data.id],
          newPosition
        )
      }
    })
    .onFinalize(() => {
      const newPosition = cardsPosition.value[data.id] * CARD.TOTAL_HEIGHT
      top.value = withSpring(newPosition)

      runOnJS(setMoving)(false)
    })
    .simultaneousWithExternalGesture(longPressGesture)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value - CARD.TOTAL_HEIGHT,
      opacity: withSpring(moving ? 1 : 0.6),
      zIndex: moving ? 1 : 0,
    }
  }, [moving])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <GestureDetector gesture={Gesture.Race(panGesture, longPressGesture)}>
        <Card data={data} />
      </GestureDetector>
    </Animated.View>
  )
}
