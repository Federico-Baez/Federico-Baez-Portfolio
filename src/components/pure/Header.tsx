import { DarkThemeIcon, LightThemeIcon, MenuIcon, ScriptIcon } from "./icons";

export default function Header() {
	return (
		<header className="bg-white px-6 shadow">
			<div className="flex h-16 items-center justify-between">
				<button className="-m-1 rounded p-1 text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-400 focus:ring-2 focus:ring-stone-500">
					<MenuIcon />
				</button>
				{/* logo + nav desktop */}
				<div>
					<a
						href="#"
						className="text-violet-400 duration-200 hover:rotate-6"
					>
						<ScriptIcon />
					</a>
				</div>

				<div className="flex items-center gap-4">
					<button className="rounded-full text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-400 focus:ring-2 focus:ring-stone-500">
						<LightThemeIcon />
						{/* <DarkThemeIcon /> */}
					</button>
					<button className="h-8 w-8 rounded-full text-stone-500 transition-colors hover:bg-stone-200 hover:text-violet-400 focus:ring-2 focus:ring-stone-500">
						ES
					</button>
				</div>
			</div>
			{/* nav movil */}
			<div className="space-y-1 border-t py-2 md:hidden">
				<a
					href="#"
					className="block rounded-md bg-violet-400 px-3 py-2 text-white"
				>
					Home
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 transition-colors hover:bg-violet-400 hover:text-white"
				>
					About
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 transition-colors hover:bg-violet-400 hover:text-white"
				>
					Blog
				</a>
				<a
					href="#"
					className="block rounded-md px-3 py-2 transition-colors hover:bg-violet-400 hover:text-white"
				>
					Contact
				</a>
			</div>
		</header>
	);
}
