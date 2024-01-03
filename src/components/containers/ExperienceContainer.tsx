import { TerminalIcon } from "../pure/icons";
import { useTranslation } from "react-i18next";

export default function ExperienceContainer() {
	const { t } = useTranslation();

	return (
		<section className="section-experience flex flex-col gap-4">
			<title className="text-highlight-dark flex items-center gap-4">
				<h2 className="items-center text-2xl font-semibold">
					{t("title_experience")}
				</h2>
				<div className="text-highlight mt-1">
					<TerminalIcon />
				</div>
			</title>
			<article className="flex flex-col gap-3">
				<div className="flex flex-col gap-1">
					<div className="flex gap-2">
						<h3 className="text-chars-strong font-bold">
							{t("job_role")}
						</h3>
						<p> | </p>
						<h4 className="text-chars-light">
							{t("job_company_name")}
						</h4>
					</div>
					<h5 className="text-chars-light text-sm">
						{t("job_dates")}
					</h5>
				</div>

				<ul className="list-disc space-y-2 pl-5">
					<li>{t("job_enum_1")}</li>
					<li>{t("job_enum_2")}</li>
					<li>{t("job_enum_3")}</li>
					<li>{t("job_enum_4")}</li>
				</ul>
			</article>
		</section>
	);
}
