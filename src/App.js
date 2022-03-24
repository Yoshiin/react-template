import { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "pages/home/Home";

import "@fontsource/roboto";

class App extends Component {

	render() {
		return (
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
