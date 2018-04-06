import React, { Component } from 'react';
import { Container, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class TodoItems extends Component {
    render() {
        return (
            <Container>
                <List>
                    { this.props.items.map((item) => {
                        return (
                            <List.Item key={item}>
                                {item}
                            </List.Item>
                        );
                    }) }
                </List>
            </Container>
        );
    }
}

TodoItems.propTypes = {
    items: PropTypes.array.isRequired
}
