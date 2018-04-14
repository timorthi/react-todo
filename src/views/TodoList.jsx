import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
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
            <Grid>
                <Grid.Row>
                    <TodoInput onSubmit={this.handleOnSubmit} />
                </Grid.Row>
                <Grid.Row>
                    <TodoItems items={this.props.todos} />
                </Grid.Row>
            </Grid>
        );
    }
}

TodoList.propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    todos: state.todolist.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (item) => dispatch(addTodo(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
