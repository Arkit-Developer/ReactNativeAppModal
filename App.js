import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import NewModal from "./src/Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <NewModal />
      <StatusBar barStyle="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
