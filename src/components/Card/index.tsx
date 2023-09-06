import { Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { CARD } from "../../utils/constants"

import { styles } from "./styles"

// export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM

export type CardProps = {
  id: number
  title: string
}

type Props = {
  data: CardProps
}

export function Card({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>

      <MaterialIcons name="drag-indicator" size={32} color="#EEE" />
    </View>
  )
}
