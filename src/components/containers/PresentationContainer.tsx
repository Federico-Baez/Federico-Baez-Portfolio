import { GithubIcon, LinkedinIcon, ScriptIconLarge } from "../pure/icons";
import { useTranslation } from "react-i18next";

export default function PresentationContainer() {
	const { t } = useTranslation();

	return (
		<section className="flex flex-col gap-4">
			<title className="text-chars dark:text-dark-chars flex items-center gap-4">
				<ScriptIconLarge />
				<h2 className="items-center text-4xl font-bold">{t("name")}</h2>
			</title>
			<div>
				<p className="dark:text-dark-chars text-chars">
					<strong className="text-principal dark:text-principal-light">
						{t("about_me_1")}
					</strong>
					{t("about_me_2")}
				</p>
				<p className="dark:text-dark-chars text-chars">
					{t("about_me_3")}
				</p>
			</div>
			<div className="dark:text-dark-chars text-chars flex space-x-4">
				<a
					href="https://www.linkedin.com/in/federico-baez/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinIcon />
				</a>
				<a
					href="https://github.com/Federico-Baez"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubIcon />
				</a>
			</div>
		</section>
	);
}
