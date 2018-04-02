import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

export default class TodoList extends Component {
    render() {
        return (
            <Container as="div">
                <TodoInput />
                <TodoItems />
            </Container>
        );
    }
}
