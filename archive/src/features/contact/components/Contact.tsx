import { init, send } from "@emailjs/browser";
import { pipe } from "fp-ts/lib/function";
import * as TE from "fp-ts/lib/TaskEither";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Divider } from "../../../shared/components";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "../../../shared/constants";

init("user_elG8VitBKKHbZSABXoEWX");

export const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [valid, setValid] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const validVal =
			!!name &&
			!!email &&
			!!message &&
			!!RegExp(EMAIL_REGEX).exec(email)?.length &&
			!!RegExp(PHONE_NUMBER_REGEX).exec(phoneNumber)?.length;

		setValid(validVal);
	}, [name, email, message]);

	const handleOnSubmit = (e: React.FormEvent<Element>) => {
		e.preventDefault();

		if (!valid) return;

		pipe(
			TE.tryCatch(
				() =>
					toast.promise(
						send("service_u8x53ol", "portfolio", {
							name,
							email,
							phoneNumber,
							message,
						}),
						{
							loading: "Submitting...",
							success: "Message sent successfully!",
							error: "Something went wrong!",
						},
					),
				console.error,
			),
		)();
	};

	return (
		<section className="container" id="contact">
			<div className="row">
				<h1
					className="text-center text-uppercase"
					// TODO remove after remove bootstrap
					style={{ marginTop: "54px" }}
				>
					Contact Me
				</h1>
			</div>
			<div className="row d-flex justify-content-center">
				<Divider className="w-auto" />
			</div>
			<form onSubmit={handleOnSubmit}>
				<div className="mb-3">
					<label htmlFor="nameInput" className="form-label">
						Name
					</label>

					<input
						type="text"
						className="form-control"
						id="nameInput"
						aria-describedby="emailHelp"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="emailInput" className="form-label">
						Email address
					</label>

					<input
						type="email"
						className="form-control"
						id="emailInput"
						placeholder="name@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="phoneNumberInput" className="form-label">
						Phone Number
					</label>

					<input
						type="tel"
						className="form-control"
						id="phoneNumberInput"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="messageTextarea" className="form-label">
						Message
					</label>

					<textarea
						className="form-control"
						id="messageTextarea"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					/>
				</div>

				<button type="submit" className="btn btn-primary" disabled={!valid}>
					Submit
				</button>
			</form>
		</section>
	);
};
