import { TerminalIcon } from "../pure/icons";
export default function ExperienceContainer() {
	return (
		<section className="section-experience flex flex-col gap-4">
			<title className="text-highlight-dark flex items-center gap-4">
				<h2 className="items-center text-2xl font-semibold">
					Experience
				</h2>
				<div className="text-highlight mt-1">
					<TerminalIcon />
				</div>
			</title>
			<article className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<div className="flex gap-2">
						<h3 className="text-chars-strong font-bold">
							Frontend Developer{" "}
						</h3>
						<p> | </p>
						<h4 className="text-chars-light">
							Aceleradora UTN FRBA
						</h4>
					</div>
					<h5 className="text-chars-light text-sm">
						Sep 2023 - Dec2023 (3 months)
					</h5>
				</div>

				<ul className="list-disc space-y-2 pl-5">
					<li>UX/UI Design using Figma.</li>
					<li>Development of user interfaces with ReactJS.</li>
					<li>
						Integration with the backend team through the use of
						APIs.
					</li>
					<li>Agile Squad environment.</li>
				</ul>
			</article>
		</section>
	);
}
