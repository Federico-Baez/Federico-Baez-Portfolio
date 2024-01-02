import LogoError from "./LogoError";
import {
	CSSIcon,
	HTMLIcon,
	JSIcon,
	LinkIcon,
	ReactIcon,
	SCSSIcon,
	TSIcon,
	TailwindIcon,
} from "./icons";

interface CardProps {
	cardImg: string;
	cardTechs: string[];
	cardTitle: string;
	cardDescription: string;
	cardLiveLink: string;
}

export default function Card({
	cardImg,
	cardTechs,
	cardTitle,
	cardDescription,
	cardLiveLink,
}: CardProps) {
	const techLogoSelector = (tech: string): React.ReactNode => {
		switch (tech) {
			case "HTML":
				return <HTMLIcon />;
			case "CSS":
				return <CSSIcon />;
			case "SCSS":
				return <SCSSIcon />;
			case "JS":
				return <JSIcon />;
			case "TS":
				return <TSIcon />;
			case "ReactJS":
				return <ReactIcon />;
			case "Tailwind":
				return <TailwindIcon />;
			default:
				return <LogoError />;
		}
	};

	return (
		<article className="overflow-hidden rounded bg-white shadow sm:flex">
			<div className="h-52">
				<img
					src={cardImg}
					alt="Calculator App Thumbnail"
					height="218px"
					width="428px"
					className="h-full w-full object-cover object-center"
				></img>
			</div>
			<div className="space-y-3 p-5">
				<div className="text-small flex font-semibold">
					{cardTechs.map((tech, index) => (
						<span className="mr-4" key={index}>
							{techLogoSelector(tech)}
						</span>
					))}
				</div>
				<h2 className="text-chars-strong text-2xl font-semibold leading-tight">
					{cardTitle}
				</h2>
				<p className="text-chars-light">{cardDescription}</p>
				<a
					href={cardLiveLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-chars hover:bg-highlight active:bg-highlight-light group inline-flex cursor-pointer items-center gap-2 rounded px-3 py-1 text-lg font-semibold text-white transition-all hover:gap-5"
				>
					Live
					<i className="transform transition-transform group-hover:rotate-90">
						<LinkIcon />
					</i>
				</a>
			</div>
			{/* <div className="flex pb-3 pl-5 pt-0">
                    <span className="text-small text-stone-800">2023</span>
                </div> */}
		</article>
	);
}
