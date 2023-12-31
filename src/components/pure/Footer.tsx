import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
	return (
		<footer className="m-4 flex flex-col items-center">
			<div className="flex space-x-4 text-stone-700">
				<LinkedinIcon />
				<GithubIcon />
			</div>
		</footer>
	);
}
