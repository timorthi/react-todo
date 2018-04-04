import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TodoInput from '../components/TodoInput';
import TodoItems from '../components/TodoItems';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        var items = this.state.items;
        items.push(item);
        this.setState({items: items});
    }

    render() {
        return (
            <Container as="div">
                <TodoInput onSubmit={this.addItem} />
                <TodoItems />
            </Container>
        );
    }
}
