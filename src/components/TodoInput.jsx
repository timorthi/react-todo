import React, { Component } from 'react';
import { Container, Button, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    setParentState = () => {
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    handleInputChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <Container>
                <Input
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    placeholder="Enter something to do..."
                />
                <Button onClick={this.setParentState}>
                    Add
                </Button>
            </Container>
        );
    }
}

TodoInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
