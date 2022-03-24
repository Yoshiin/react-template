import { Component } from "react";
import { translate } from 'react-i18nify';
import "styles/pages/home/Home.scss";

class Home extends Component {

	render() {
		return (
			<div>
				<span>{translate('home.title')} - {translate('home.who')}</span>
			</div>
		);
	}
}

export default Home;
