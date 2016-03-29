import React, { PropTypes } from 'react';

const Link = (props) => {
	if (props.currentFilter === props.filter)
		return <span>{props.children}</span>
	return (
		<a href="#" onClick={() => props.onClick()}>{props.children}</a>
	)
}

Link.propTypes = {
	currentFilter: PropTypes.string.isRequired,
	filter: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node

}

export default Link
