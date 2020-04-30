import React from "react";
import { View } from "react-native";
import AddEntry from "./components/AddEntry";

export default function App() {
	return (
		<View>
			{/* <Text>Open Yousef App.tsx to start working on your app!</Text> */}
			{/* <Ionicons name="ios-pizza" color="red" size={100} /> */}
			<AddEntry></AddEntry>
		</View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });
