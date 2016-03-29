import React, { Component } from 'react';
import Link from './Link'

function onLinkClick(filter) {
	console.log('dispatch action to change filter to ', filter)
}

const Footer = () => {
	return (
		<p>
			Show:
			{' '}
			<Link filter="SHOW_ALL" onClick={onLinkClick}>All</Link>
			{', '}
			<Link filter="SHOW_ACTIVE" onClick={onLinkClick}>Active</Link>
			{', '}
			<Link filter="SHOW_COMPLETED" onClick={onLinkClick}>Completed</Link>
		</p>
	)
}

export default Footer
