import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import styles from "./HoverButton.module.css";
import { useEffect, useRef, useState } from "react";

const FLAIR_WIDTH_FACTOR = 1.6;

/**
 * HoverButton component with customizable styles and GSAP animations.
 *
 * @param {object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {string} [props.fontSize="1.8rem"] - The font size of the button text.
 * @param {string} [props.fontWeight="600"] - The font weight of the button text.
 * @param {string} [props.fontColor="#333"] - The font color of the button text.
 * @param {string} [props.fontColorOnHover="#ffedd6"] - The font color of the button text on hover.
 * @param {object} [props.padding] - The padding inside the button.
 * @param {string} [props.padding.x] - The horizontal padding inside the button.
 * @param {string} [props.padding.y] - The vertical padding inside the button.
 * @param {number} [props.lineHeight=1] - The line height of the button text.
 * @param {string} [props.borderRadius="10rem"] - The border radius of the button.
 * @param {string} [props.borderWidth] - The border width of the button.
 * @param {string} [props.borderColor="#333"] - The border color of the button.
 * @param {string} [props.flairColor="#333"] - The color of the flair effect on hover.
 * @param {function} [props.onClick] - The function to be called when the button is clicked.
 * @returns {JSX.Element} The HoverButton component.
 */
export default function HoverButton({
	children,
	fontSize = "1.8rem",
	fontWeight = "600",
	fontColor = "#333",
	fontColorOnHover = "#ffedd6",
	padding = {
		x: `${Math.round(Number.parseFloat(fontSize)) * 1.168}rem`,
		y: `${Math.round(Number.parseFloat(fontSize)) * 0.681}rem`,
	},
	lineHeight = 1,
	borderRadius = "10rem",
	borderWidth = `${Math.round(Number.parseFloat(fontSize)) * 0.168}rem`,
	borderColor = "#333",
	flairColor = "#333",
	onClick = () => {
		console.log(`${children}: was clicked!`);
	},
	className = "",
}) {
	const [buttonWidth, setButtonWidth] = useState(null);

	const buttonRef = useRef(null);
	const circleRef = useRef(null);
	const buttonTextRef = useRef(null);
	const buttonBorderRef = useRef(null);

	useEffect(() => {
		setButtonWidth(buttonRef.current.offsetWidth * FLAIR_WIDTH_FACTOR);
	}, []);

	const { contextSafe } = useGSAP({ scope: buttonRef.current });

	const handleMouseEnter = contextSafe((e, center = false) => {
		const rect = buttonRef.current.getBoundingClientRect();
		const x = center
			? e.clientX - rect.left
			: e.clientX - rect.left - circleRef.current.offsetWidth / 2;
		const y = e.clientY - rect.top - circleRef.current.offsetWidth / 2;

		gsap.set(circleRef.current, {
			x: x,
			y: y,
		});

		gsap.set(buttonTextRef.current, {
			zIndex: 1,
		});

		gsap.to(buttonTextRef.current, {
			color: fontColorOnHover,
			duration: 0.3,
			ease: "power3.out",
		});

		gsap.to(circleRef.current, {
			scale: 1,
			duration: 0.5,
			ease: "power3.out",
			force3D: true,
		});
	});
	const handleMouseMove = contextSafe((e) => {
		const rect = buttonRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - circleRef.current.offsetWidth / 2;
		const y = e.clientY - rect.top - circleRef.current.offsetWidth / 2;

		gsap.to(buttonTextRef.current, {
			color: fontColorOnHover,
			duration: 0.3,
			ease: "power3.out",
		});

		gsap.to(circleRef.current, {
			x: x,
			y: y,
			duration: 0.2,
			ease: "power3.out",
			force3D: true,
		});
	});

	const handleMouseLeave = contextSafe((e) => {
		const rect = buttonRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left - circleRef.current.offsetWidth / 2;
		const y = e.clientY - rect.top - circleRef.current.offsetWidth / 2;

		gsap.set(circleRef.current, {
			x: x,
			y: y,
		});

		gsap.to(buttonTextRef.current, {
			color: fontColor,
			duration: 0.3,
			ease: "power3.out",
		});

		gsap.to(circleRef.current, {
			scale: 0,
			duration: 0.5,
			ease: "power3.out",
			force3D: true,
		});
	});

	return (
		<button
			className={`${styles.button} ${className} `}
			style={{
				padding: `${padding.y} ${padding.x}`,
				borderRadius: borderRadius,
				fontFamily: "inherit",
				fontWeight: fontWeight,
			}}
			ref={buttonRef}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
		>
			<span
				className={`${styles.button__border} `}
				style={{
					border: `${borderWidth} solid ${borderColor}`,
					borderRadius: borderRadius,
				}}
				ref={buttonBorderRef}
			></span>
			<span
				className={`${styles.button__text} `}
				style={{ lineHeight: lineHeight, fontSize: fontSize, color: fontColor }}
				ref={buttonTextRef}
			>
				{children}
			</span>
			<span
				className={`${styles.button__flair} `}
				style={{
					backgroundColor: flairColor,
					width: `${buttonWidth}px`,
					borderRadius: "100rem",
					transform: "scale(0)",
				}}
				ref={circleRef}
			></span>
		</button>
	);
}
