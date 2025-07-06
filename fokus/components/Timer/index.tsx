import { StyleSheet, Text } from "react-native";

interface TimerProps {
	totalSeconds: number;
}

export function Timer({ totalSeconds }: TimerProps) {
	const date = new Date(totalSeconds * 1000);
	const options = {
		minute: "2-digit",
		second: "2-digit",
	} as const;

	return <Text style={styles.timer}>{date.toLocaleTimeString("pt-BR", options)}</Text>;
}

const styles = StyleSheet.create({
	timer: {
		color: "#fff",
		fontSize: 54,
		fontWeight: "bold",
		textAlign: "center",
	},
});
