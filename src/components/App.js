import {Component} from "react";
import { setLocale, setTranslations } from "react-i18nify";

import "@fontsource/roboto";
import "styles/App.scss";

class App extends Component {

	constructor(props) {
		super(props);
		setTranslations(require("locales/fr.json"));
		setLocale('fr');
	}

	render() {
		return (
			<div className="tc_App">
				Welcome
			</div>
		);
	}
}

export default App;
