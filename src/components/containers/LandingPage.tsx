import Footer from "../pure/Footer";
import Header from "../pure/Header";
import { TerminalIcon } from "../pure/icons";
import CardContainer from "./CardContainer";

export default function LandingPage() {
	return (
		<div>
			<Header />
			<main className="mx-auto grid max-w-2xl gap-8 px-4">
				{/* About me section */}
				<section>
					<title className="text-secondary flex items-center gap-4">
						<h2 className="items-center text-2xl font-semibold">
							Federico Baez
						</h2>
					</title>
				</section>
				{/* Experience section */}
				<section>
					<title className="text-secondary flex items-center gap-4">
						<h2 className="items-center text-2xl font-semibold">
							Experience
						</h2>
						<div className="text-secondary-light mt-1">
							<TerminalIcon />
						</div>
					</title>
				</section>
				{/* cards grid container*/}
				<section>
					<CardContainer />
				</section>
			</main>
			<Footer />
		</div>
	);
}
