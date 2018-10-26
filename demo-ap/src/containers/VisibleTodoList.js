/**
 *  author : bo.peng
 *  createTime 2018-10-25 15:13
 *  description :
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../store/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
	case 'SHOW_ALL':
	  return todos
	case 'SHOW_COMPLETED':
	  debugger;
	  return todos.filter(t => t.completed)
	case 'SHOW_ACTIVE':
	  return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
	onTodoClick: id => {
	  dispatch(toggleTodo(id))
	}
  }
}

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList