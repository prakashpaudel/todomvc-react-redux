import React, { Component } from 'react';

const Link = (props) => {
	return (
		<a href="#" onClick={() => props.onClick(props.filter)}>{props.filter}</a>
	)
}

export default Link
