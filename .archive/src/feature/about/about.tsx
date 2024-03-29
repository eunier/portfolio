import { Divider } from "../../../shared/components";

export const About = (): JSX.Element => {
	return (
		<section className="container" id="about">
			<div className="row">
				<h1
					className="text-center text-uppercase"
					// TODO remove after remove bootstrap
					style={{ marginTop: "54px" }}
				>
					About
				</h1>
			</div>

			<div className="row d-flex justify-content-center">
				<Divider className="w-auto" />
			</div>

			<div className="container">
				<div className="row">
					<div className="col">
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Reprehenderit ex cupiditate maiores quis doloremque aliquid rerum?
							Dicta corporis, neque, veniam quod deleniti ipsum exercitationem
							veritatis beatae dolore modi numquam recusandae!
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
