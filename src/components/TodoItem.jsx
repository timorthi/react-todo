import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

export default class TodoItem extends Component {
    render() {
        return (
            <List.Item>
                {this.props.item}
            </List.Item>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.string.isRequired
}
