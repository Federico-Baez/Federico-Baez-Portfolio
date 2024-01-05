import { useTranslation } from "react-i18next";
import { LightThemeIcon, DarkThemeIcon, ScriptIcon } from "./icons";
import { useEffect, useState } from "react";

interface HeaderProps {
	showDetails: boolean;
}

export default function Header({ showDetails }: HeaderProps) {
	const [darkMode, setDarkMode] = useState(
		localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches),
	);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
		}
	}, [darkMode]);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
	};

	const changeLanguage = () => {
		const newLanguage = i18n.language === "en" ? "es" : "en";
		i18n.changeLanguage(newLanguage);
	};

	return (
		<header className="bg-background-light dark:bg-dark-background-light sticky top-0 z-50 bg-opacity-80 shadow backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-3xl items-center justify-between">
				{showDetails ? (
					<div className="flex items-center gap-6 pl-4 align-middle opacity-100 transition-all duration-150">
						<ScriptIcon />
						<h1 className="text-chars dark:text-dark-chars text-xl font-bold">
							{t("name")}
						</h1>
						{/* <div className="text-chars dark:text-dark-chars flex items-end space-x-3 align-bottom">
							<a
								href="https://www.linkedin.com/in/federico-baez/"
								target="_blank"
								rel="noopener noreferrer"
								className=" "
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
						</div> */}
					</div>
				) : (
					<div></div>
				)}
				<div className="flex items-center gap-4 pr-4">
					<button
						onClick={toggleTheme}
						className="text-chars-light hover:text-highlight active:text-highlight-light dark:text-dark-chars-light rounded-full transition-colors"
					>
						{darkMode ? <DarkThemeIcon /> : <LightThemeIcon />}
					</button>
					<button
						onClick={changeLanguage}
						className="text-chars-light hover:text-highlight dark:text-dark-chars-light active:text-highlight-light h-8 w-8 rounded-full font-semibold transition-colors"
					>
						{i18n.language.toUpperCase()}
					</button>
				</div>
			</div>
			{/* nav movil */}
			{/* <div className="space-y-1 border-t py-2 md:hidden">
				<a
					href="#"
					className="block rounded-md bg-violet-600 px-3 py-2 text-white"
				>
					Home
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 text-stone-900 transition-colors hover:bg-violet-600 hover:text-white"
				>
					About
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 text-stone-900 transition-colors hover:bg-violet-600 hover:text-white"
				>
					Blog
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 text-stone-900 transition-colors hover:bg-violet-600 hover:text-white"
				>
					Contact
				</a>
			</div> */}
		</header>
	);
}
