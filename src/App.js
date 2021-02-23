import logo from './logo.svg';
import './App.css';

import StateLessComponent from "./component/StateLessComponent";
import StateFullComponent from "./container/StateFullComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload page.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
				<StateLessComponent />
				<StateFullComponent />
			</header>
		</div>
	);
}

export default App;
