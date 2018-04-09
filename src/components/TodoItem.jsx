import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

export default class TodoItem extends Component {
    render() {
        return (
            <List.Item key={this.props.item}>
                {this.props.item}
            </List.Item>
        );
    }
}

TodoItem.propTypes = {
    items: PropTypes.string.isRequired
}
