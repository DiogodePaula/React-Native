import { Image, StyleSheet, View } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<Image source={require("../assets/images/foco.png")} style={styles.image} />

			<View style={styles.actions} />
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

		borderRadius: 32,
		borderWidth: 2,
		borderColor: "#144480",
	},
});

// Hoisting é um comportamento do JavaScript onde declarações de variáveis e funções são "elevadas"
// (hoisted) para o topo do seu escopo durante a fase de compilação, antes da execução do código.
