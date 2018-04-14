import React, { Component } from 'react';
import { Grid, Button, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.value);
        this.setState({ value: "" });
    };

    handleInputChange = (e) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Input
                        value={this.state.value}
                        onChange={this.handleInputChange}
                        placeholder="Enter something to do..."/>
                    <Button onClick={this.handleSubmit}>
                        Add
                    </Button>
                </Grid.Row>
            </Grid>
        );
    }
}

TodoInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
