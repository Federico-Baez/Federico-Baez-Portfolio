/* import Footer from "../pure/Footer"; */
import Header from "../pure/Header";
import CardContainer from "./CardContainer";
import ExperienceContainer from "./ExperienceContainer";
import PresentationContainer from "./PresentationContainer";

export default function LandingPage() {
	return (
		<div>
			<Header />
			<main className="mx-auto grid max-w-2xl gap-8 px-4 pb-8 pt-4">
				{/* About me section */}
				<PresentationContainer />
				{/* Experience section */}
				<ExperienceContainer />
				{/* Projects section*/}
				<CardContainer />
			</main>
			{/* <Footer /> */}
		</div>
	);
}
