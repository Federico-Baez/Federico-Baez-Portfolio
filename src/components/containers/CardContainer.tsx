import Card from "../pure/Card";
import { TerminalIcon } from "../pure/icons";
import { useTranslation } from "react-i18next";

export default function CardContainer() {
	const { t } = useTranslation();

	return (
		<section className="section-projects grid grid-cols-1 gap-4">
			{/* About me title */}
			<title className="text-highlight-dark dark:text-highlight flex items-center gap-4">
				<h2 className="items-center text-2xl font-semibold">
					{t("title_projects")}
				</h2>
				<div className="text-highlight dark:text-highlight-light mt-1">
					<TerminalIcon />
				</div>
			</title>
			<div className="grid grid-cols-1 gap-6">
				<Card
					cardImg="/Calculator-Thumbnail.png"
					cardTechs={["HTML", "CSS", "SCSS", "JavaScript", "React"]}
					cardTitle={t("calculator_subtitle")}
					cardDescription={t("calculator_description")}
					cardLiveLink="https://federico-baez.github.io/Calculator-App-React/"
					cardCodeLink="https://github.com/Federico-Baez/Calculator-App-React"
				/>
				<Card
					cardImg="/Shortener-Thumbnail.png"
					cardTechs={["HTML", "CSS", "SCSS", "JavaScript", "React"]}
					cardTitle={t("shortener_subtitle")}
					cardDescription={t("shortener_description")}
					cardLiveLink="https://federico-baez.github.io/URL-Shortener-App-React/"
					cardCodeLink="https://github.com/Federico-Baez/URL-Shortener-App-React"
				/>
				<Card
					cardImg="/Landing-Thumbnail.png"
					cardTechs={["HTML", "CSS", "SCSS"]}
					cardTitle={t("landing_subtitle")}
					cardDescription={t("landing_description")}
					cardLiveLink="https://federico-baez.github.io/Landing-Page/"
					cardCodeLink="https://github.com/Federico-Baez/Landing-Page"
				/>
				{/* <Card
						cardImg="/Todo-Thumbnail.png"
						cardTechs={["React"]}
						cardTitle={t("")}
						cardDescription={t("")}
					/> */}
			</div>
		</section>
	);
}
