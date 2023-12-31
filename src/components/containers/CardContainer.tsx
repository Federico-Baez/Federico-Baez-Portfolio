import Card from "../pure/Card";
import { FlaskIcon } from "../pure/icons";

export default function CardContainer() {
	return (
		<div className="grid grid-cols-1 gap-4 md:gap-4">
			{/* About me title */}
			<title className="text-secondary flex items-center gap-4">
				<h2 className="items-center text-2xl font-semibold">
					Projects
				</h2>
				<div className="text-secondary-light mt-1">
					<FlaskIcon />
				</div>
			</title>
			<Card
				cardImg="/public/Calculator-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS", "JS", "ReactJS"]}
				cardTitle="Calculator Web App"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
			/>
			<Card
				cardImg="/public/Shortener-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS", "JS", "ReactJS"]}
				cardTitle="URL Shortener Web App"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
			/>
			<Card
				cardImg="/public/Landing-Thumbnail.png"
				cardTechs={["HTML", "CSS", "SCSS"]}
				cardTitle="Responsive Landing Page"
				cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
			/>
			{/* <Card
						cardImg="/public/Todo-Thumbnail.png"
						cardTechs={["ReactJS"]}
						cardTitle="Todo List Web App"
						cardDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, vero qui? Quia magnam eius repellendus."
					/> */}
		</div>
	);
}
