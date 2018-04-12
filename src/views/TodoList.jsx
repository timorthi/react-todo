import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

import { addTodo } from '../redux/todolist/actions';

class TodoList extends Component {
    handleOnSubmit = (item) => {
        this.props.addTodo(item);
    };

    render() {
        return (
            <Container as="div" textAlign="center">
                <TodoInput onSubmit={this.handleOnSubmit} />
                <TodoItems items={this.props.todos} />
            </Container>
        );
    }
}

TodoList.propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    todos: state.todosReducer.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (item) => dispatch(addTodo(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
