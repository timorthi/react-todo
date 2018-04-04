import React, { Component } from 'react';
import { Container, Form, Button, Input } from 'semantic-ui-react';

export default class TodoInput extends Component {
    render() {
        return (
            <Container>
                <Input placeholder="Enter something to do..." />
                <Button>
                    Add
                </Button>
            </Container>
        );
    }
}
