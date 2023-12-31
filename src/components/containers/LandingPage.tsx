/* import Footer from "../pure/Footer"; */
import { useEffect, useRef, useState } from "react";
import Header from "../pure/Header";
import CardContainer from "./CardContainer";
import ExperienceContainer from "./ExperienceContainer";
import PresentationContainer from "./PresentationContainer";
import Footer from "../pure/Footer";

export default function LandingPage() {
	const [isScrolled, setIsScrolled] = useState(false);
	const presentationContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onScroll = () => {
			if (presentationContainerRef.current) {
				const rect =
					presentationContainerRef.current.getBoundingClientRect();
				const headerHeight = 160;
				setIsScrolled(window.scrollY >= rect.bottom + headerHeight);
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div>
			<Header showDetails={isScrolled} />
			<main className="mx-auto grid max-w-3xl gap-8 px-4 pb-8 pt-8">
				{/* About me section */}
				<div ref={presentationContainerRef}>
					<PresentationContainer />
				</div>
				<hr className="border-chars-strong dark:border-dark-chars-strong rounded-lg border border-dotted"></hr>
				{/* Experience section */}
				<ExperienceContainer />
				{/* Projects section*/}
				<CardContainer />
			</main>
			{/* <Footer /> */}
			<Footer />
		</div>
	);
}
