import classNames from "classnames";
import { useState } from "react";
import homeIcon from "../../assets/home.svg";
import briefcaseIcon from "../../assets/briefcase.svg";
import envelopeIcon from "../../assets/envelope.svg";

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
	const [activeNavLinkIdx, setActiveNavLinkIdx] = useState(0);

	return (
		<nav
			className={classNames(
				"navbar navbar-expand-sm sticky-top navbar-dark bg-secondary",
			)}
			id="navbar"
		>
			<div className="container-fluid">
				<button
					className="navbar-toggler ms-auto"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav nav-pills text-uppercase fw-bold">
						{navLinkNames.map((el, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<li key={idx} className="nav-item">
								{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
								<a
									className={classNames("nav-link mx-1 px-2", {
										active: idx === activeNavLinkIdx,
									})}
									href={`#${el.name}`}
									onClick={() => setActiveNavLinkIdx(idx)}
									aria-current={idx === activeNavLinkIdx ? "page" : undefined}
								>
									{/* biome-ignore lint/a11y/useAltText: <explanation> */}
									<img
										style={{ marginRight: "0.5rem", height: "1.5rem" }}
										src={el.icon}
									/>
									{el.name}
								</a>
							</li>
						))}
					</ul>

					<hr className="d-md-none text-white-50" />

					<div className="navbar-nav f" />
				</div>
			</div>
		</nav>
	);
};
