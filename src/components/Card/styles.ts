import { StyleSheet } from "react-native"
import { CARD } from "../../utils/constants"

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
  },

  content: {
    width: "100%",
    height: CARD.HEIGHT,
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
