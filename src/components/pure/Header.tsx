import { DarkThemeIcon, LightThemeIcon, MenuIcon, ScriptIcon } from "./icons";

export default function Header() {
	return (
		<header className="bg-white px-6 shadow">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
				{/* nav movil menu button */}
				{/* <button className="-m-1 mr-8 rounded p-1 text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-600 focus:ring-2 focus:ring-stone-500">
					<MenuIcon />
				</button> */}
				{/* logo + nav desktop */}
				<div className="text-violet-600 duration-200 hover:rotate-6">
					<ScriptIcon />
				</div>
				<div className="flex items-center">
					{/* nav desktop */}
					<div className="ml-8 hidden space-x-16 md:flex">
						<a className="px-3 py-2  text-violet-600" href="#">
							Home
						</a>
						<a
							className="px-3 py-2 text-stone-900 transition-colors hover:text-violet-600"
							href="#"
						>
							About
						</a>
						<a
							className="px-3 py-2 text-stone-900 transition-colors hover:text-violet-600"
							href="#"
						>
							Blog
						</a>
						<a
							className="px-3 py-2 text-stone-900 transition-colors hover:text-violet-600"
							href="#"
						>
							Contact
						</a>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<button className="rounded-full text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-600 focus:ring-2 focus:ring-stone-500">
						<LightThemeIcon />
						{/* <DarkThemeIcon /> */}
					</button>
					<button className="h-8 w-8 rounded-full text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-600 focus:ring-2 focus:ring-stone-500">
						EN
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
