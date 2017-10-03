import React from 'react'
import FilterLink from '../containers/FilterLink'
import '../Style.css'

const Footer = () => (
	<p>
		<span className="filterTag">
			<FilterLink filter="SHOW_ALL">
				All
			</FilterLink>
		</span>
		<span className="filterTag">
			<FilterLink filter="SHOW_ACTIVE">
				Active
			</FilterLink>
		</span>
		<span className="filterTag">
			<FilterLink filter="SHOW_COMPLETED">
				Done
			</FilterLink>
		</span>
	</p>
)

export default Footer