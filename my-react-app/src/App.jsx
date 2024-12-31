import './App.css'
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";


function App() {


	return (
		<div className="container-fluid">
			<Header/>
			<div className="row">
				<div className="col-3">
					<Sidebar/>
				</div>
				<div className="col-9">
					<Main/>
				</div>
			</div>
		</div>
	)
}

export default App
