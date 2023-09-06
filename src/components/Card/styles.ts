import { StyleSheet } from "react-native"

export const HEIGHT = 68
export const MARGIN_BOTTOM = 12

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEIGHT,
    borderRadius: 8,
    backgroundColor: "#595959",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
})
