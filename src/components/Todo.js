import React, {Component} from 'react'
import {connect} from 'react-redux'
import { deleteTodo } from '../actions'
import PropTypes from 'prop-types'
import Delete from 'react-icons/lib/fa/close'
import '../Style.css'


class Todo extends Component {
	constructor(props) {
		super();
	}
	componentDidMount() {
		console.log("Componnt Did Mount");
	}
	handleDeleteClick(id) {
		this.props.onDeleteClick(id);
	}
	render() {
		const {id} = this.props

		return (
			<li
				onClick={this.props.onClick}
				style={{
					textDecoration: 
					this.props.completed ? 'line-through' : 'none'
				}}
			>
		 		{this.props.text}
				<span onClick={() => this.handleDeleteClick(id)}>
					<Delete />
				</span>
			</li>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick: id => {
			dispatch(deleteTodo(id))
		}
	}
}

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default connect(
	null,
	mapDispatchToProps
)(Todo)