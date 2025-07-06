import { ActionButton } from "@/components/ActionButton";
import { FokusButton } from "@/components/FokusButton";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { Timer } from "@/components/Timer";
import { TimerType } from "@/interfaces/pomodoro";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const pomodoro: TimerType[] = [
	{ id: "focus", initialValue: 25 * 60, image: require("../assets/images/foco.png"), display: "Foco" },
	{ id: "short", initialValue: 5 * 60, image: require("../assets/images/descanso-curto.png"), display: "Pausa Curta" },
	{ id: "long", initialValue: 15 * 60, image: require("../assets/images/descanso-longo.png"), display: "Pausa Longa" },
];

export default function Index() {
	const [timerType, setTimerType] = useState<TimerType>(pomodoro[0]);
	const [timerRunning, setTimerRunning] = useState(false);
	const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
	const timerRef = useRef<number | null>(null);

	// Por que useRef e não useState:
	// Persistência: useRef mantém o valor entre re-renders
	// Não causa re-render: Quando você muda timerRef.current, não dispara um novo render
	// Acesso imediato: Você pode acessar o valor atual instantaneamente
	// Sugestão de comentário mais preciso:

	function toggleTimer() {
		if (timerRef.current) {
			clearTimer();
			return;
		}

		setTimerRunning(true);

		const id = setInterval(() => {
			setSeconds((oldTimer) => {
				if (oldTimer === 0) {
					clearTimer();
					return timerType.initialValue;
				}
				return oldTimer - 1;
			});
			console.log("Timer retomado!");
		}, 1000);

		timerRef.current = id;
	}

	function toggleTimerType(newTimerType: TimerType) {
		setTimerType(newTimerType);
		setSeconds(newTimerType.initialValue);
		clearTimer();
	}

	function clearTimer() {
		if (timerRef.current != null) {
			clearInterval(timerRef.current);
			timerRef.current = null;
			setTimerRunning(false);
		}
	}

	return (
		<View style={styles.container}>
			<Image source={timerType.image} style={styles.image} />

			<View style={styles.actions}>
				<View style={styles.context}>
					{pomodoro.map((item) => (
						<ActionButton key={item.id} active={timerType.id === item.id} onPress={() => toggleTimerType(item)} display={item.display} />
					))}
				</View>

				<Timer totalSeconds={seconds} />

				<FokusButton title={timerRunning ? "Pausar" : "Iniciar"} icon={timerRunning ? <PauseIcon /> : <PlayIcon />} onPress={toggleTimer} />
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
