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
}

export default function Card({
	cardImg,
	cardTechs,
	cardTitle,
	cardDescription,
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
		<article className="overflow-hidden rounded bg-white shadow">
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
				<div className="text-small flex font-semibold text-violet-600">
					{cardTechs.map((tech, index) => (
						<span className="mr-4" key={index}>
							{techLogoSelector(tech)}
						</span>
					))}
				</div>
				<h2 className="text-xl font-semibold leading-tight text-stone-800">
					{cardTitle}
				</h2>
				<p className="text-stone-600">{cardDescription}</p>
				<button className="bg-secondary-light flex items-center gap-2 rounded px-3 py-1 text-lg text-white">
					Live
					<LinkIcon />
				</button>
			</div>
			{/* <div className="flex pb-3 pl-5 pt-0">
                    <span className="text-small text-stone-800">2023</span>
                </div> */}
		</article>
	);
}
