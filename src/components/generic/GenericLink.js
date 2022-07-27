import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

class GenericLink extends Component {
	static propTypes = {
		to: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
		this.generateLink = this.generateLink.bind(this);
	}

	generateLink() {
		const url = this.props.to;
		if (url.startsWith("#") || url.startsWith("/#")) {
			return <HashLink to={url} {...this.props} smooth>{this.props.children}</HashLink>;
		} else if (url.startsWith("/")) {
			return <Link to={url} {...this.props}>{this.props.children}</Link>;
		} else {
			return <a href={url} target="_blank" rel="noreferrer noopener nofollow" {...this.props}>{this.props.children}</a>;
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.generateLink()}
			</React.Fragment>
		);
	}
}

export default GenericLink;
