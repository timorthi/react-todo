import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TodoItem from '../components/TodoItem';

export default class TodoItems extends Component {
    render() {
        return (
            <Container>
                <List>
                    { this.props.items.map((item) => { return <TodoItem key={item} item={item} />; }) }
                </List>
            </Container>
        );
    }
}

TodoItems.propTypes = {
    items: PropTypes.array.isRequired
}
