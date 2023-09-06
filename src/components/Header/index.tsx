import { Text, View } from "react-native"

import { styles } from "./styles"

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>categorias</Text>
      <Text style={styles.subtitle}>
        Defina a sequência de assuntos que você mais gosta no topo da lista.
      </Text>
    </View>
  )
}
