import { ReactNode } from "react"
import { View } from "react-native"

import { styles } from "./styles"

interface CardContentProps {
  children: ReactNode
}

export function CardContent({ children }: CardContentProps) {
  return <View style={styles.content}>{children}</View>
}
