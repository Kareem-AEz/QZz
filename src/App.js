import { useEffect, useReducer } from "react";
import HoverButton from "./components/HoverButton/HoverButton";
import Header from "./components/Main/Header";

import { QzzData } from "./data/data";
import StartScreen from "./components/Main/StartScreen";
import config from "./config";
import QuestionsScreen from "./components/Main/QuestionsScreen";
import { renderToStaticMarkup } from "react-dom/server";
import FinishScreen from "./components/Main/FinishScreen";
import Footer from "./components/Main/Footer";

const qzzKeys = Object.keys(QzzData);
const initialState = {
	// ready, active, finished
	status: qzzKeys.length > 0 ? "ready" : "no_data",
	availableQzz: qzzKeys,
	qzzIndex: 0,
	selectedQzz: qzzKeys[0] || null,
	currentQuestionIndex: 0,
	answer: null,
	questions: qzzKeys[0] ? [...QzzData[qzzKeys[0]].questions] : [],
	points: 0,
	remainingTime: null,
	styles: {
		color: QzzData[qzzKeys[0]].styles.color,
		backgroundColor: QzzData[qzzKeys[0]].styles.backgroundColor,
	},
};

function reducer(state, action) {
	let newIndex, newKey;
	switch (action.type) {
		/***      ***/
		case "nextQzz":
			const canGoNext = state.qzzIndex < state.availableQzz.length - 1;
			newIndex = canGoNext ? state.qzzIndex + 1 : 0;
			newKey = state.availableQzz[newIndex];

			return {
				...state,
				qzzIndex: newIndex,
				selectedQzz: newKey,
				questions: [...QzzData[newKey]?.questions],
				styles: {
					color: QzzData[newKey].styles.color,
					backgroundColor: QzzData[newKey].styles.backgroundColor,
				},
			};

		/***      ***/
		case "previousQzz":
			const canGoBack = state.qzzIndex !== 0;
			newIndex = canGoBack ? state.qzzIndex - 1 : state.availableQzz.length - 1;
			newKey = state.availableQzz[newIndex];

			return {
				...state,
				qzzIndex: newIndex,
				selectedQzz: newKey,
				questions: [...QzzData[newKey].questions],
				styles: {
					color: QzzData[newKey].styles.color,
					backgroundColor: QzzData[newKey].styles.backgroundColor,
				},
			};

		/***      ***/
		case "start":
			return {
				...state,
				status: "active",
				remainingTime: state.questions.length * config.SECS_PER_QUESTION,
			};

		/***      ***/
		case "newAnswer":
			const isCorrectAnswer =
				action.payload ===
				state.questions[state.currentQuestionIndex].correctOption;
			const currentQuestionPoints =
				state.questions[state.currentQuestionIndex].points;

			return {
				...state,
				answer: action.payload,
				points: isCorrectAnswer
					? state.points + currentQuestionPoints
					: state.points,
			};

		/***      ***/
		case "nextQuestion":
			return {
				...state,
				currentQuestionIndex: state.currentQuestionIndex + 1,
				answer: null,
			};

		/***      ***/
		case "finish":
			return { ...state, status: "finish" };

		/***      ***/
		case "takeMeBackHome":
			return {
				...initialState,
				qzzIndex: state.qzzIndex,
				selectedQzz: state.selectedQzz,
				questions: state.questions,
				styles: state.styles,
			};

		/***      ***/
		case "tick":
			return {
				...state,
				remainingTime: state.remainingTime - 1,
				status: state.remainingTime - 1 === 0 ? "finish" : state.status,
			};
		default:
			console.error(`Unknown action type: ${action.type}`);
	}
}

export default function App() {
	const [
		{
			status,
			availableQzz,
			qzzIndex,
			selectedQzz,
			currentQuestionIndex,
			answer,
			questions,
			points,
			remainingTime,
			styles,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	console.log(availableQzz);

	const numberOfQuestions = questions.length;
	const maxPoints = questions.reduce(
		(acc, question) => acc + question.points,
		0
	);

	useEffect(() => {
		document.body.style.transition = `color ${config.LARGE_ANIMATION_DELAY}s ${config.CUSTOM_EASING_1}, background-color ${config.LARGE_ANIMATION_DELAY}s ${config.CUSTOM_EASING_1}`;
		document.documentElement.style.setProperty(
			"--easing",
			config.CUSTOM_EASING_1
		);
	}, []);

	useEffect(() => {
		document.body.style.color = styles.color;
		document.body.style.backgroundColor = styles.backgroundColor;

		document.documentElement.style.setProperty(
			"--background-color",
			styles.backgroundColor
		);
		document.documentElement.style.setProperty("--color", styles.color);
	}, [selectedQzz, styles.backgroundColor, styles.color]);

	return (
		<>
			<Header></Header>

			<main>
				{status === "ready" && (
					<>
						<StartScreen
							numberOfQuestions={numberOfQuestions}
							maxPoints={maxPoints}
						>
							{selectedQzz.split("_").join(" ")} Quiz Time!
						</StartScreen>
						{numberOfQuestions !== 0 && (
							<HoverButton
								fontWeight="900"
								flairColor={styles.color}
								fontColor={styles.color}
								fontColorOnHover={styles.backgroundColor}
								borderColor={styles.color}
								onClick={() => dispatch({ type: "start" })}
							>
								Start Qzz
							</HoverButton>
						)}

						<div className="button--next">
							<HoverButton
								padding={{ x: "1.2rem", y: "1rem" }}
								fontWeight="900"
								fontSize="2.2rem"
								flairColor={styles.color}
								fontColor={styles.color}
								fontColorOnHover={styles.backgroundColor}
								borderColor={styles.color}
								onClick={() => dispatch({ type: "nextQzz" })}
							>{`>`}</HoverButton>
						</div>

						<div className="button--before">
							<HoverButton
								padding={{ x: "1.2rem", y: "1rem" }}
								fontWeight="900"
								fontSize="2.2rem"
								flairColor={styles.color}
								fontColor={styles.color}
								fontColorOnHover={styles.backgroundColor}
								borderColor={styles.color}
								onClick={() => dispatch({ type: "previousQzz" })}
							>{`<`}</HoverButton>
						</div>
					</>
				)}

				{status === "active" && (
					<QuestionsScreen
						dispatch={dispatch}
						question={questions[currentQuestionIndex]}
						numberOfQuestions={numberOfQuestions}
						currentQuestionIndex={currentQuestionIndex}
						maxPoints={maxPoints}
						remainingTime={remainingTime}
						points={points}
						styles={styles}
						answer={answer}
					></QuestionsScreen>
				)}

				{status === "finish" && (
					<FinishScreen
						points={points}
						maxPoints={maxPoints}
						selectedQzz={selectedQzz}
						styles={styles}
						dispatch={dispatch}
					></FinishScreen>
				)}
			</main>
			<Footer></Footer>
		</>
	);
}
