import { useGSAP } from "@gsap/react";
import { gsap, TextPlugin } from "gsap/all";
import config from "../../config";
import DynamicNumberComponent from "../DynamicNumberComponent";

gsap.registerPlugin(TextPlugin);

function StartScreen({ children, numberOfQuestions, maxPoints }) {
	const text = children.join(" ");
	useGSAP(
		() => {
			gsap.to(".main__title", {
				text: text,
				duration: config.MEDIUM_ANIMATION_DELAY,
				ease: "power3.out",
			});
		},
		{ dependencies: [children] }
	);

	return (
		<section className="main__screen">
			<h2 className="main__title">{children}</h2>
			<div className="main__questions-wrapper">
				<DynamicNumberComponent
					targetNumber={numberOfQuestions}
				></DynamicNumberComponent>
				<span>Questions</span>
			</div>
			<div className="main__questions-wrapper">
				<DynamicNumberComponent
					targetNumber={maxPoints}
				></DynamicNumberComponent>
				<span>Points</span>
			</div>
		</section>
	);
}

export default StartScreen;
