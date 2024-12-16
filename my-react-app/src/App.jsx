import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import MyApp from "./components/MyApp.jsx";
import { useState } from "react";


function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header/>
			<Main/>
			<MyApp/>

		</>
	)
}

export default App
