import { SuitcaseIcon } from "../pure/icons";
import { useTranslation } from "react-i18next";

export default function ExperienceContainer() {
  const { t } = useTranslation();

  return (
    <section className="section-experience flex flex-col gap-4">
      <title className="text-highlight-dark dark:text-highlight flex items-center gap-4">
        <h2 className="items-center text-2xl font-semibold">
          {t("title_experience")}
        </h2>
        <div className="text-highlight dark:text-highlight-light mt-1">
          <SuitcaseIcon />
        </div>
      </title>
      <article className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <div className="flex flex-col sm:flex-row">
              <div className="flex sm:mb-0">
                <h3 className="text-chars-strong dark:text-dark-chars-strong font-bold">
                  {t("job2_role")}
                </h3>
                <p className="mx-2 text-black dark:text-white">{"|"}</p>
              </div>
              <h4 className="text-chars-light dark:text-dark-chars-light">
                {t("job2_company_name")}
              </h4>
            </div>
          </div>
          <h5 className="text-chars-light dark:text-dark-chars-light text-sm">
            {t("job2_dates")}
          </h5>
        </div>

        <ul className="text-chars dark:text-dark-chars list-disc space-y-2 pl-5">
          <li>{t("job2_enum_1")}</li>
          <li>{t("job2_enum_2")}</li>
          <li>{t("job2_enum_3")}</li>
          <li>{t("job2_enum_4")}</li>
          <li>{t("job2_enum_5")}</li>
        </ul>
      </article>
      <article className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex">
            <div className="flex flex-col sm:flex-row">
              <div className="flex sm:mb-0">
                <h3 className="text-chars-strong dark:text-dark-chars-strong font-bold">
                  {t("job1_role")}
                </h3>
                <p className="mx-2 text-black dark:text-white">{"|"}</p>
              </div>
              <h4 className="text-chars-light dark:text-dark-chars-light">
                {t("job1_company_name")}
              </h4>
            </div>
          </div>
          <h5 className="text-chars-light dark:text-dark-chars-light text-sm">
            {t("job1_dates")}
          </h5>
        </div>

        <ul className="text-chars dark:text-dark-chars list-disc space-y-2 pl-5">
          <li>{t("job1_enum_1")}</li>
          <li>{t("job1_enum_2")}</li>
          <li>{t("job1_enum_3")}</li>
          <li>{t("job1_enum_4")}</li>
        </ul>
      </article>
    </section>
  );
}
