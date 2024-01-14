import { useState } from "react";
import { ProjectCard, ProjectModal } from ".";
import { Divider } from "../../../shared/components";
import { projects } from "../data";
import { Project } from "../models";

export const Portfolio = () => {
	const [selectedProject, setSelectedProject] = useState<Project | undefined>(
		undefined,
	);

	return (
		<section className="container" id="portfolio">
			<div className="row">
				<h1
					className="text-center text-uppercase"
					// TODO remove after remove bootstrap
					style={{ marginTop: "54px" }}
				>
					Portfolio
				</h1>
			</div>

			<div className="row d-flex justify-content-center">
				<Divider className="w-auto" />
			</div>

			<div className="container">
				<div className="row">
					{projects.map((p, idx) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							className="col-lg-4 col-md-6 gx-4 gy-4"
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={idx}
							data-bs-toggle="modal"
							data-bs-target="#projectModal"
							role="button"
							aria-label="Open project modal"
							onClick={() => setSelectedProject(p)}
						>
							<ProjectCard
								className={p.backgroundColor}
								icon={p.icon}
								title={p.title}
							/>
						</div>
					))}
				</div>
			</div>

			<ProjectModal
				title={selectedProject?.title ?? ""}
				mediaSrc={selectedProject?.mediaSrc ?? ""}
				description={selectedProject?.description ?? ""}
				deployedUrl={selectedProject?.deployedUrl ?? ""}
				sourceCodeUrl={selectedProject?.sourceCodeUrl ?? ""}
			/>
		</section>
	);
};
