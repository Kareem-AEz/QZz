import { useEffect } from "react";
import DynamicNumberComponent from "../DynamicNumberComponent";
import HoverButton from "../HoverButton/HoverButton";

function QuestionsScreen({
	dispatch,
	question,
	styles,
	answer,
	numberOfQuestions,
	currentQuestionIndex,
	points,
	maxPoints,
	remainingTime,
}) {
	const isAnswered = answer !== null;
	const isLastQuestion = currentQuestionIndex + 1 === numberOfQuestions;

	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);

		return () => clearInterval(id);
	});

	const mins = Math.floor(remainingTime / 60);
	const secs = remainingTime % 60;

	return (
		<section className="qzz-container">
			<div className="stats">
				<progress
					style={{
						"--background-color": styles.backgroundColor,
						"--color": styles.color,
					}}
					max={numberOfQuestions}
					value={currentQuestionIndex + isAnswered}
				></progress>
				<div className="stats-text">
					<p>
						Questions: {currentQuestionIndex + 1}/{numberOfQuestions}
					</p>
					<p style={{ display: "flex" }}>
						<DynamicNumberComponent
							targetNumber={points}
						></DynamicNumberComponent>
						/ {maxPoints}
					</p>
				</div>
			</div>

			<div className="questions-wrapper">
				<h2 className="question__text">{question.question}</h2>
				<Options
					styles={styles}
					question={question}
					dispatch={dispatch}
					answer={answer}
				></Options>
			</div>

			<footer className="footer">
				<div
					className="button timer"
					style={{ userSelect: "none", pointerEvents: "none" }}
				>
					{mins.toString().padStart(2, "0")} :{" "}
					{secs.toString().padStart(2, "0")}
				</div>
				{isAnswered ? (
					isLastQuestion ? (
						<HoverButton
							fontWeight="900"
							flairColor={styles.color}
							fontColor={styles.color}
							fontColorOnHover={styles.backgroundColor}
							borderColor={styles.color}
							onClick={() => {
								dispatch({ type: "finish" });
							}}
						>
							Finish
						</HoverButton>
					) : (
						<HoverButton
							className={"flex-end"}
							fontWeight="900"
							flairColor={styles.color}
							fontColor={styles.color}
							fontColorOnHover={styles.backgroundColor}
							borderColor={styles.color}
							onClick={() => dispatch({ type: "nextQuestion" })}
						>
							Next
						</HoverButton>
					)
				) : null}
			</footer>
		</section>
	);
}

function Options({ dispatch, styles, question, answer }) {
	const isAnswered = answer !== null;
	const correctOption = question.correctOption;

	return (
		<div className="question__options">
			{question.options.map((option, index) => (
				<div
					className="question__option-wrapper"
					key={option + index}
				>
					<button
						className={`button question__option ${
							isAnswered ? (index === correctOption ? "correct" : " wrong") : ""
						} ${answer === index ? "selected " : ""}`}
						style={{ borderColor: styles.color }}
						onClick={() => dispatch({ type: "newAnswer", payload: index })}
						disabled={isAnswered}
					>
						{option}
					</button>
				</div>
			))}
		</div>
	);
}

export default QuestionsScreen;
