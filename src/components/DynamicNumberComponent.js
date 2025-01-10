import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function DynamicNumberComponent({ targetNumber, minWidth = "4rem" }) {
	const [number, setNumber] = useState(0);
	const numberRef = useRef({ value: 0 });

	useGSAP(
		() => {
			gsap.to(numberRef.current, {
				value: targetNumber,
				duration: 1.5,
				ease: "power1.out",
				onUpdate: () => {
					setNumber(Math.round(numberRef.current.value));
				},
			});
		},
		{ dependencies: [targetNumber] }
	);

	return (
		<span
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minWidth: minWidth,
			}}
		>
			{number}
		</span>
	);
}

export default DynamicNumberComponent;
