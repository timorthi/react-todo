import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    addItem = (item) => {
        var items = this.state.items;
        items.push(item);
        this.setState({ items: items });
    };

    render() {
        return (
            <Container as="div" textAlign="center">
                <TodoInput onSubmit={this.addItem} />
                <TodoItems items={this.state.items} />
            </Container>
        );
    }
}
