import HoverButton from "../HoverButton/HoverButton";

function FinishScreen({ points, maxPoints, selectedQzz, styles, dispatch }) {
	return (
		<section
			className="finish-screen"
			style={{ color: styles.color }}
		>
			<h2 className="question__text">{selectedQzz} Quiz Finished!</h2>
			<p>
				You scored <strong>{points} </strong>
				out of <strong>{maxPoints} </strong>
				points.
			</p>
			<HoverButton
				fontWeight="900"
				flairColor={styles.color}
				fontColor={styles.color}
				fontColorOnHover={styles.backgroundColor}
				borderColor={styles.color}
				onClick={() => dispatch({ type: "takeMeBackHome" })}
			>
				Home
			</HoverButton>
		</section>
	);
}

export default FinishScreen;
