import { useEffect, useRef, useState } from "react";
import styles from "./HoverEffectButton.module.css";

const BUTTON_FLAIR_FACTOR = 1.6;

function HoverEffectButton({
	children,
	fontSize = `1.8rem`,
	fontColor = "#333",
	fontColorOnHover = "#ffedd6",
	buttonStrokeColor = "transparent",
	buttonStrokeWidth = `${Math.round(Number.parseFloat(fontSize)) * 0.168}rem`,
	padding = {
		x: `${Math.round(Number.parseFloat(fontSize)) * 1.168}rem`,
		y: `${Math.round(Number.parseFloat(fontSize)) * 0.681}rem`,
	},
	buttonBorderRadius = `10rem`,
	buttonFlairColor = "#333",
	buttonFlairTransition = "transform 0.3s ease",
}) {
	const [buttonWidth, setButtonWidth] = useState(0);
	const button = useRef(null);
	const buttonTitle = useRef(null);
	const buttonFlair = useRef(null);

	useEffect(() => {
		setButtonWidth(
			button.current.getBoundingClientRect().width * BUTTON_FLAIR_FACTOR
		);
	}, []);

	function handleMouseEnter(e) {
		const buttonRect = button.current.getBoundingClientRect();
		const x = e.clientX - buttonRect.left - buttonWidth / 2;
		const y = e.clientY - buttonRect.top - buttonWidth / 2;

		// Add transition for smooth scaling up
		buttonFlair.current.style.transition = "transform 0.3s ease-out";
		buttonFlair.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;

		buttonTitle.current.style.color = fontColorOnHover;
	}

	function handleMouseMove(e) {
		const buttonRect = button.current.getBoundingClientRect();
		const x = e.clientX - buttonRect.left - buttonWidth / 2;
		const y = e.clientY - buttonRect.top - buttonWidth / 2;

		// Disable transition for smooth movement
		buttonFlair.current.style.transition = "none";
		buttonFlair.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;
	}

	function handleMouseLeave(e) {
		const buttonRect = button.current.getBoundingClientRect();
		const x = e.clientX - buttonRect.left - buttonWidth / 2;
		const y = e.clientY - buttonRect.top - buttonWidth / 2;

		// Add transition for scaling down
		buttonFlair.current.style.transition = "transform 0.3s ease-out";
		buttonFlair.current.style.transform = `translate(${x}px, ${y}px) scale(0)`;

		buttonTitle.current.style.color = fontColor;
	}

	return (
		<button
			className={styles.button}
			style={{
				padding: `${padding.y} ${padding.x}`,
				borderRadius: buttonBorderRadius,
				fontSize: fontSize,
			}}
			ref={button}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<span
				className={styles.button__border}
				style={{
					border: `${buttonStrokeWidth} solid ${buttonStrokeColor}`,
					borderRadius: buttonBorderRadius,
					zIndex: 1,
				}}
			></span>

			<span
				className={styles.button__title}
				style={{ color: fontColor, zIndex: 1 }}
				ref={buttonTitle}
			>
				{children}
			</span>

			<span
				className={styles.button__flair}
				style={{
					backgroundColor: buttonFlairColor,
					zIndex: "0",
					width: `${buttonWidth}px`,
					transform: "scale(0)",
					transition: "transform 0.3s ease-out",
				}}
				ref={buttonFlair}
			></span>
		</button>
	);
}

export default HoverEffectButton;
