interface CardProps {
	cardImg: string;
	cardTechs: string[];
	cardTitle: string;
	cardDescription: string;
}

export default function Card({
	cardImg,
	cardTechs,
	cardTitle,
	cardDescription,
}: CardProps) {
	return (
		<article className="overflow-hidden rounded bg-white shadow">
			<div className="h-52">
				<img
					src={cardImg}
					alt="Calculator App Thumbnail"
					height="218px"
					width="428px"
					className="h-full w-full object-cover object-center"
				></img>
			</div>
			<div className="space-y-3 p-5">
				<h3 className="text-small font-semibold text-violet-600">
					{cardTechs.map((tech, index) => (
						<span className="mr-4" key={index}>
							{tech}
						</span>
					))}
				</h3>
				<h2 className="text-xl font-semibold leading-tight text-stone-800">
					{cardTitle}
				</h2>
				<p className="text-stone-600">{cardDescription}</p>
			</div>
			{/* <div className="flex pb-3 pl-5 pt-0">
                    <span className="text-small text-stone-800">2023</span>
                </div> */}
		</article>
	);
}
