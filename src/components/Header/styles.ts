import { StyleSheet, StatusBar } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20,
    paddingHorizontal: 32,
    paddingBottom: 12,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#fff",
    textAlign: "center",
  },
})
