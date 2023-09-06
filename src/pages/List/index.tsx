import { View } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated"

import { CARDS, totalCards, listToObject } from "../../data/cards"

import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

import { CARD } from "../../utils/constants"

import { styles } from "./styles"

export function List() {
  const scrollY = useSharedValue(0)
  const cardsPosition = useSharedValue(listToObject())

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  })

  console.log(cardsPosition.value)
  console.log(cardsPosition.value[2])

  return (
    <View style={styles.container}>
      <Header />

      <Animated.ScrollView
        style={styles.list}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: totalCards * CARD.TOTAL_HEIGHT }}
      >
        {CARDS.map((card) => (
          <Card.Root
            key={card.id}
            cardId={card.id}
            scrollY={scrollY}
            cardsPosition={cardsPosition}
          >
            <Card.Content>
              <Card.Title title={card.title} />
            </Card.Content>
          </Card.Root>
        ))}
      </Animated.ScrollView>
    </View>
  )
}
