import { useGSAP } from "@gsap/react";
import { gsap, TextPlugin } from "gsap/all";
import { useEffect, useRef } from "react";
import config from "../../config";

function Header() {
	const container = useRef(null);
	const tl = useRef();

	useEffect(() => {
		gsap.registerPlugin(TextPlugin);
	}, []);

	const toggleTimeline = () => {
		tl.current.reversed() ? tl.current.play() : tl.current.reverse();
	};

	useGSAP(
		() => {
			tl.current = gsap
				.timeline({ paused: true })
				.to(".header__logo", {
					text: "QZzzzz",
					duration: config.QUICK_ANIMATION_DELAY,
					ease: "power3.out",
				})
				.reverse();
		},
		{ scope: container }
	);

	return (
		<header
			className="header"
			ref={container}
		>
			<h1
				className="header__logo"
				onClick={toggleTimeline}
			>
				QZz
			</h1>
		</header>
	);
}

export default Header;
