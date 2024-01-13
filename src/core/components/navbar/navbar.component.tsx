import { For, createSignal } from "solid-js";
import homeIcon from "../../../assets/home.svg";
import briefcaseIcon from "../../../assets/briefcase.svg";
import envelopeIcon from "../../../assets/envelope.svg";

type NavLink = {
	name: string;
	icon: string;
};

const navLinkNames: NavLink[] = [
	{
		name: "home",
		icon: homeIcon,
	},
	{
		name: "portfolio",
		icon: briefcaseIcon,
	},
	// {
	//   name: 'about',
	//   icon: 'bi-file-person',
	// },
	{
		name: "contact",
		icon: envelopeIcon,
	},
];

export const Navbar = () => {
	const [activeNavLinkIdx, setActiveNavLinkIdx] = createSignal(0);

	return (
		<nav
			class="navbar navbar-expand-sm sticky-top navbar-dark bg-secondary"
			id="navbar"
		>
			<div class="container-fluid">
				<button
					class="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>

				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav nav-pills text-uppercase fw-bold">
						{/* {navLinkNames.map((el, idx) => (
							<li key={idx} class="nav-item">
								<a
									class={classs("nav-link mx-1 px-2", {
										active: idx === activeNavLinkIdx,
									})}
									href={`#${el.name}`}
									onClick={() => setActiveNavLinkIdx(idx)}
									aria-current={idx === activeNavLinkIdx ? "page" : undefined}
								>
									<img
										style={{ marginRight: "0.5rem", height: "1.5rem" }}
										src={el.icon}
									></img>
									{el.name}
								</a>
							</li>
						))} */}
						<For each={navLinkNames}>
							{(el, idx) => (
								<li class="nav-item">
									{/* biome-ignore lint/a11y/useValidAnchor: */}
									<a
										class="nav-link mx-1 px-2"
										classList={{ active: idx() === activeNavLinkIdx() }}
										href={`#${el.name}`}
										onClick={() => setActiveNavLinkIdx(idx)}
										aria-current={idx === activeNavLinkIdx ? "page" : undefined}
									>
										<img
											style={{ "margin-right": "0.5rem", height: "1.5rem" }}
											src={el.icon}
											alt={el.name}
										/>
										{el.name}
									</a>
								</li>
							)}
						</For>
					</ul>

					<hr class="d-md-none text-white-50" />

					<div class="navbar-nav f" />
				</div>
			</div>
		</nav>
	);
};
