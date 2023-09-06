import { Text } from "react-native"

import { styles } from "./styles"

interface CardTitleProps {
  title: string
}

export function CardTitle({ title }: CardTitleProps) {
  return <Text style={styles.title}>{title}</Text>
}
