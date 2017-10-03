import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button } from 'antd'
import Add from 'react-icons/lib/fa/plus-circle'

let AddTodo = ({ dispatch }) => {
	let inputy

	return (
		<div>
			<form 
				onSubmit={e => {
					e.preventDefault()
					if (!inputy.value.trim()) {
						return
					}
					dispatch(addTodo(inputy.value))
					inputy.value = ''
				}}
			>
				<input ref={node => {
            			inputy = node
          		}}
          				placeholder="Write your to do"
        		/>
        		<Button type="submit" htmlType="submit">
          			<Add/>
        		</Button>
      		</form>
    	</div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo