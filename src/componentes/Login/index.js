import React, { Component } from 'react';
import { Container, Input, Button, Form } from "reactstrap";

// import { Container } from './styles';

export default class Login extends Component {

    logar = (event) => {
        event.preventDefault();

        const form = event.target;
        const input = form.children[0];

        this.props.history.push(`/home/${input.value}`);

    }
    render() {
        return (<Container className="h-100">
            <Form
                className="h-100 d-flex flex-column align-items-center justify-content-center"
                onSubmit={this.logar}
            >
                <Input
                    className="text-center mt-2"
                    placeholder="Seu login do GitHub"
                />
                <Button className="w-100" color="dark">
                    Logar
      </Button>
            </Form>
        </Container>
        );
    }
}
