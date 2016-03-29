import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
	return {
		currentFilter: state.visibilityFilter,
		filter: ownProps.filter,
		children: ownProps.children
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FooterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

FooterLink.propTypes = {
	filter: PropTypes.string.isRequired,
	children: PropTypes.node
}


export default FooterLink