import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const pomodoro = [
	{ id: "focus", initialValue: 25, image: require("../assets/images/foco.png"), display: "Foco" },
	{ id: "short", initialValue: 5, image: require("../assets/images/descanso-curto.png"), display: "Pausa Curta" },
	{ id: "long", initialValue: 15, image: require("../assets/images/descanso-longo.png"), display: "Pausa Longa" },
];

export default function Index() {
	const [timerType, setTimerType] = useState(pomodoro[0]);

	return (
		<View style={styles.container}>
			<Image source={timerType.image} style={styles.image} />

			<View style={styles.actions}>
				<View style={styles.context}>
					{pomodoro.map((item) => (
						<Pressable key={item.id} style={timerType.id === item.id ? styles.contextButtonActive : null} onPress={() => setTimerType(item)}>
							<Text style={styles.contextButtonText}>{item.display}</Text>
						</Pressable>
					))}
				</View>

				<Text style={styles.timer}>
					{new Date(timerType.initialValue * 1000).toLocaleString("pt-BR", {
						minute: "2-digit",
						second: "2-digit",
					})}
				</Text>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Iniciar</Text>
				</Pressable>
			</View>
			<View style={styles.footer}>
				<Text style={styles.footerText}>Estudando com o Fokus</Text>
			</View>
		</View>
	);
}

// Vantagens do StyleSheet.create:
// Performance: Estilos são otimizados e reutilizados
// Validação: Detecta propriedades inválidas em desenvolvimento
// IntelliSense: Autocomplete e verificação de tipos
// Imutabilidade: Estilos não podem ser modificados após criação
const styles = StyleSheet.create({
	// o padrão de View é flex
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#021123",
		// gap: 20,
	},
	image: {
		width: "70%",
		resizeMode: "contain",
	},
	text: {
		color: "#fff",
	},
	actions: {
		paddingHorizontal: 24,
		paddingVertical: 24,
		backgroundColor: "#14448080", // 80 no final define a opacidade
		width: "80%",
		gap: 32,
		borderRadius: 32,
		borderWidth: 2,
		borderColor: "#144480",
	},
	context: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	contextButtonActive: {
		backgroundColor: "#144480",
		borderRadius: 8,
	},
	contextButtonText: {
		color: "#fff",
		padding: 8,
		fontSize: 12.5,
		fontWeight: "bold",
		textAlign: "center",
	},
	timer: {
		color: "#fff",
		fontSize: 54,
		fontWeight: "bold",
		textAlign: "center",
	},
	button: {
		backgroundColor: "#b872ff",
		padding: 8,
		borderRadius: 32,
	},
	buttonText: {
		color: "#021123",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	footer: {
		width: "100%",
		marginTop: 32,
	},
	footerText: {
		color: "#fff",
		fontSize: 12.5,
		fontWeight: "500",
		textAlign: "center",
	},
});

// Hoisting é um comportamento do JavaScript onde declarações de variáveis e funções são "elevadas"
// (hoisted) para o topo do seu escopo durante a fase de compilação, antes da execução do código.
