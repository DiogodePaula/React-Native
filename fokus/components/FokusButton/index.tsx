import { Pressable, StyleSheet, Text } from "react-native";

interface FokusButtonProps {
	onPress: () => void;
	title: string;
	icon: React.ReactNode;
}

export function FokusButton({ onPress, title, icon }: FokusButtonProps) {
	return (
		<Pressable style={styles.button} onPress={onPress}>
			{icon}
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#b872ff",
		padding: 8,
		borderRadius: 32,
		flexDirection: "row",
		gap: 12,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonText: {
		color: "#021123",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
