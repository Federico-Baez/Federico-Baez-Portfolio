import { GithubIcon, LinkedinIcon } from "../pure/icons";

export default function PresentationContainer() {
	return (
		<section>
			<title className="text-chars flex items-center gap-4">
				<h2 className="items-center text-4xl font-bold">
					Federico Baez
				</h2>
			</title>
			<div className="flex space-x-4 text-stone-700">
				<LinkedinIcon />
				<GithubIcon />
			</div>
		</section>
	);
}
