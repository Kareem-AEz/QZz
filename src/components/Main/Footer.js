import { ReactComponent as GithubLogo } from "../../svg/github.svg";

function Footer() {
	return (
		<footer className="main-footer">
			<a
				href="https://github.com/Kareem-AEz"
				target="_blank"
				rel="noreferrer"
			>
				<GithubLogo
					style={{
						height: "1.8rem",
						width: "1.8rem",
						color: "inherit",
						fill: "inherit",
					}}
				></GithubLogo>{" "}
				Created By Kareem-AEz
			</a>
		</footer>
	);
}

export default Footer;
