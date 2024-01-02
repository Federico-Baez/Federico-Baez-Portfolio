import Card from "../pure/Card";
import { FlaskIcon } from "../pure/icons";

export default function CardContainer() {
	return (
		<section className="section-projects grid grid-cols-1 gap-4 md:gap-4">
			{/* About me title */}
			<title className="text-highlight-dark flex items-center gap-4">
				<h2 className="items-center text-2xl font-semibold">
					Projects
				</h2>
				<div className="text-highlight mt-1">
					<FlaskIcon />
				</div>
			</title>
			<Card
				cardImg="/Calculator-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS", "JS", "ReactJS"]}
				cardTitle="Calculator Web App"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
				cardLiveLink="https://federico-baez.github.io/Calculator-App-React/"
			/>
			<Card
				cardImg="/Shortener-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS", "JS", "ReactJS"]}
				cardTitle="URL Shortener Web App"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
				cardLiveLink="https://federico-baez.github.io/URL-Shortener-App-React/"
			/>
			<Card
				cardImg="/Landing-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS"]}
				cardTitle="Responsive Landing Page"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
				cardLiveLink="https://federico-baez.github.io/Landing-Page/"
			/>
			{/* <Card
						cardImg="/Todo-Thumbnail.png"
						cardTechs={["ReactJS"]}
						cardTitle="Todo List Web App"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/> */}
		</section>
	);
}
