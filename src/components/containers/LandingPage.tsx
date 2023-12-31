import Card from "../pure/Card";
import Footer from "../pure/Footer";
import Header from "../pure/Header";

export default function LandingPage() {
	return (
		<div>
			<Header />
			<main className="p-4">
				{/* cards grid container*/}
				<div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
					<Card
						cardImg="/public/Calculator-Thumbnail.png"
						cardTechs={["ReactJS"]}
						cardTitle="Calculator Web App"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/>
					<Card
						cardImg="/public/Shortener-Thumbnail.png"
						cardTechs={["ReactJS"]}
						cardTitle="URL Shortener Web App"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/>
					<Card
						cardImg="/public/Landing-Thumbnail.png"
						cardTechs={["HTML", "SCSS"]}
						cardTitle="Responsive Landing Page"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/>
					<Card
						cardImg="/public/Todo-Thumbnail.png"
						cardTechs={["ReactJS"]}
						cardTitle="Todo List Web App"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/>
				</div>
			</main>
			<Footer />
		</div>
	);
}
