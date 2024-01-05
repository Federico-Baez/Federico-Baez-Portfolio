import LogoError from "./LogoError";
import { CSSIcon, HTMLIcon, ReactIcon, TSIcon, TailwindIcon } from "./icons";

export default function Footer() {
	const techLogoSelector = (tech: string): React.ReactNode => {
		switch (tech) {
			case "HTML":
				return <HTMLIcon />;
			case "CSS":
				return <CSSIcon />;
			case "TypeScript":
				return <TSIcon />;
			case "React":
				return <ReactIcon />;
			case "Tailwind":
				return <TailwindIcon />;
			default:
				return <LogoError />;
		}
	};

	const techs = ["HTML", "Tailwind", "TypeScript", "React"];

	return (
		<footer className="m-4 flex flex-col items-center gap-3 pb-6">
			<div className="text-chars-strong dark:text-dark-chars-strong items-center font-semibold">
				<h3>This page was made using</h3>
			</div>
			<div className="text-small flex font-semibold">
				{techs.map((tech, index) => (
					<div className="group/tooltip relative mr-4" key={index}>
						{techLogoSelector(tech)}
						<span className="bg-chars before:bg-chars dark:text-chars dark:stone-300 pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 -translate-y-0 whitespace-nowrap rounded-md px-1.5 py-1 text-xs text-stone-200 opacity-0 transition-all before:absolute before:-bottom-1 before:left-1/2 before:-z-10 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rotate-45 before:rounded-sm before:content-[''] group-hover/tooltip:-translate-y-3 group-hover/tooltip:opacity-100 dark:bg-stone-200 before:dark:bg-stone-200">
							{tech}
						</span>
					</div>
				))}
			</div>
		</footer>
	);
}
