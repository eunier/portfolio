// import { createSignal } from "solid-js";
// import viteLogo from "/vite.svg";
import "./app.scss";
import { Footer } from "./core/components/footer/footer";
import { Navbar } from "./core/components/navbar/navbar";
// import solidLogo from "./assets/solid.svg";

function App() {
	// const [count, setCount] = createSignal(0);

	return (
		<>
			<Navbar />
			<Footer />
			{/* <div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://solidjs.com" target="_blank" rel="noreferrer">
					<img src={solidLogo} class="logo solid" alt="Solid logo" />
				</a>
			</div>
			<h1>Vite + Solid</h1>
			<div class="card">
				<button
					type="button"
					onClick={() => {
						setCount((count) => count + 1);
					}}
				>
					count is {count()}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Solid logos to learn more
			</p> */}
		</>
	);
}

export default App;
