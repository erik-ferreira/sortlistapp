import { View } from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated"

import { CARDS } from "../../data/cards"

import { Card } from "../../components/Card"
import { Header } from "../../components/Header"

import { CARD } from "../../utils/constants"

import { styles } from "./styles"

export function List() {
  const scrollY = useSharedValue(0)
  const cardsPosition = useSharedValue(listToObject(CARDS))

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
  })

  // function to create one array object by CARDS
  function listToObject(list: typeof CARDS) {
    const listOfCards = Object.values(list)

    const object: any = {}

    listOfCards.forEach((card, index) => {
      object[card.id] = index
    })

    return object
  }

  return (
    <View style={styles.container}>
      <Header />

      <Animated.ScrollView
        style={styles.list}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height: CARDS.length * CARD.TOTAL_HEIGHT }}
      >
        {CARDS.map((item) => (
          <Card.Root
            cardId={item.id}
            scrollY={scrollY}
            cardsPosition={cardsPosition}
            totalCards={CARDS.length}
          >
            <Card.Content>
              <Card.Title title={item.title} />
            </Card.Content>
          </Card.Root>
        ))}
      </Animated.ScrollView>
    </View>
  )
}
