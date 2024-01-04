import LogoError from "./LogoError";
import { useTranslation } from "react-i18next";
import {
	CSSIcon,
	HTMLIcon,
	JSIcon,
	LinkAltIcon,
	LinkIcon,
	ReactIcon,
	SCSSIcon,
	TSIcon,
	TailwindIcon,
} from "./icons";
import { useState } from "react";

interface CardProps {
	cardImg: string;
	cardTechs: string[];
	cardTitle: string;
	cardDescription: string;
	cardLiveLink: string;
	cardCodeLink: string;
}

export default function Card({
	cardImg,
	cardTechs,
	cardTitle,
	cardDescription,
	cardLiveLink,
	cardCodeLink,
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
			case "React":
				return <ReactIcon />;
			case "Tailwind":
				return <TailwindIcon />;
			default:
				return <LogoError />;
		}
	};

	const { t } = useTranslation();
	const [hovered, setHovered] = useState(false);

	return (
		<article
			className="overflow-hidden rounded bg-white shadow sm:flex sm:overflow-visible sm:rounded-none sm:bg-transparent sm:shadow-none dark:bg-[#2B2926] dark:sm:bg-transparent"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className="h-54 overflow-hidden shadow-md sm:w-[100%] sm:rounded">
				<a
					href={cardLiveLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={cardImg}
						alt="Calculator App Thumbnail"
						rel="preload"
						height="218px"
						width="428px"
						className="h-full w-full transform cursor-pointer object-cover object-center shadow transition-all duration-500 ease-in-out"
						style={{
							transform: hovered ? "scale(1.1)" : "scale(1)",
							transition: "transform 0.35s ease-in-out",
						}}
					></img>
				</a>
			</div>
			<div className="space-y-2 p-5 sm:min-w-[391px] sm:max-w-[391px] sm:py-3 sm:pl-5 sm:pr-0">
				<div className="text-small flex font-semibold">
					{cardTechs.map((tech, index) => (
						<div
							className="group/tooltip relative mr-4"
							key={index}
						>
							{techLogoSelector(tech)}
							<span className="bg-chars before:bg-chars dark:text-chars dark:stone-300 pointer-events-none absolute bottom-full left-1/2 z-20 -translate-x-1/2 -translate-y-0 whitespace-nowrap rounded-md px-1.5 py-1 text-xs text-stone-200 opacity-0 transition-all before:absolute before:-bottom-1 before:left-1/2 before:-z-10 before:h-2.5 before:w-2.5 before:-translate-x-1/2 before:rotate-45 before:rounded-sm before:content-[''] group-hover/tooltip:-translate-y-3 group-hover/tooltip:opacity-100 dark:bg-stone-200 before:dark:bg-stone-200">
								{tech}
							</span>
						</div>
					))}
				</div>
				<h2 className="text-chars-strong dark:text-dark-chars-strong text-2xl font-semibold leading-tight">
					{cardTitle}
				</h2>
				<p className="text-chars-light dark:text-dark-chars-light">
					{cardDescription}
				</p>
				<div className="flex gap-3">
					<a
						href={cardCodeLink}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-chars dark:bg-dark-chars hover:bg-highlight dark:hover:bg-highlight dark:hover:text-background dark:active:bg-highlight-light  active:bg-highlight-light dark:text-dark-background inline-flex cursor-pointer items-center gap-2 rounded px-3 py-1 text-lg font-semibold text-white transition-all "
					>
						{t("button_code")}
						<i className="transform transition-transform">
							<LinkAltIcon />
						</i>
					</a>
					<a
						href={cardLiveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-chars dark:bg-dark-chars dark:text-dark-background dark:hover:bg-highlight dark:hover:text-background dark:active:bg-highlight-light hover:bg-highlight active:bg-highlight-light group inline-flex cursor-pointer items-center gap-2 rounded px-3 py-1 text-lg font-semibold text-white transition-all hover:gap-5"
					>
						{t("button_live")}
						<i className="transform transition-transform group-hover:rotate-90">
							<LinkIcon />
						</i>
					</a>
				</div>
			</div>
			{/* <div className="flex pb-3 pl-5 pt-0">
                    <span className="text-small text-stone-800">2023</span>
                </div> */}
		</article>
	);
}
