import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters} from '../actions/action'
import {Route} from 'react-router-dom';

import AddTodo from '../components/AddTodo/AddTodo'
import TodoList from '../components/TodoList/TodoList'
import Footer from '../components/Footer/Footer'


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)


class TodoApp extends Component {
    componentWillMount() {
    }

    render() {
        //dispatch 是什么时候注入的？
        console.log(this.props);
        const {dispatch, visibleTodos, visibilityFilter} = this.props
        return (
            <div>
                <AddTodo
                    onAddClick={this.props.addTodo}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={this.props.todoClick}/>
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={this.props.setVisibilityFilter}/>
                <Route path="/campaign" component={Home}/>
                <Route path="/series" component={About}/>
            </div>
        )
    }
}

TodoApp.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

//选择注入哪些属性...
function stateToProps(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// 注意！connect 的第二个参数不传组件就会有dispatch方法...
function dispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        todoClick: (index) => dispatch(toggleTodo(index)),
        setVisibilityFilter: (nextFilter) => dispatch(setVisibilityFilter(nextFilter))
    }
}

export default connect(stateToProps, dispatchToProps)(TodoApp)