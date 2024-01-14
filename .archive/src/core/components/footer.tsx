import { createSignal } from "solid-js";
import { socialLinks } from "../data/social-links";
// import { createSignal } from "solid-js";

// const SocialLinks = styled.div`
//   column-gap: 1.5rem;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 2rem;
//   margin-top: 2rem;
// `;

// const SocialLinkAnchor = styled.a`
//   border-radius: 100% !important;
//   border-width: 0.2rem !important;
//   display: grid !important;
//   height: 4.5rem !important;
//   place-items: center !important;
//   width: 4.5rem !important;
// `;

// const SocialLinkIcon = styled.img`
//   height: 2rem;
// `;

// const CopyRight = styled.div`
//   margin-bottom: 0.5rem;
//   margin-top: 0.5rem;
//   text-align: center;
//   color: white;
// `;

export const Footer = () => {
	const [year] = createSignal(new Date().getFullYear());

	return (
		<div class="container-fluid">
			<div class="row text-center text-white bg-secondary bg-opacity-75">
				<div class="col-lg-6 col-md-12 mt-4 mb-4">
					<h2>Location</h2>

					<p>Miami-Fort Lauderdale Area, USA, Florida</p>
				</div>

				<div class="col-lg-6 col-md-12 mt-4 mb-4">
					<h2>On The Web</h2>

					<div
						style={{
							"column-gap": "1.5rem;",
							display: "flex",
							"justify-content": "center",
							"margin-bottom": "2rem",
							"margin-top": "2rem",
						}}
					>
						{socialLinks.map((sl) => (
							<a
								style={{
									"border-radius": "100%",
									"border-width": "0.2rem",
									display: "grid",
									height: "3rem",
									"place-items": "center",
									width: "3rem",
								}}
								class="btn btn-outline-light"
								href={sl.url}
								target="_blank"
								rel="noreferrer"
							>
								<img
									style={{
										"margin-bottom": "0.5rem",
										"margin-top": "0.5rem",
										"text-align": "center",
										color: "white",
									}}
									src={`data:image/svg+xml;utf8,${sl.icons}`}
									alt="social link"
								/>
							</a>
						))}
					</div>
				</div>
			</div>

			<div class="row bg-secondary">
				<div class="col">
					<div
						style={{
							"margin-bottom": "0.5rem",
							"margin-top": "0.5rem",
							"text-align": "center",
							color: "white",
						}}
					>
						&copy; {year()} Yunier Alvarez Portfolio
					</div>
					<p>footer here</p>
				</div>
			</div>
		</div>
	);
};
