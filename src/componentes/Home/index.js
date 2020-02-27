import React, { Component } from 'react';

import { Navbar, Input, Button, InputGroup, InputGroupAddon, Container, Row, Col, Form } from 'reactstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar color="dark" fixed="bottom">
                    <Container>
                        <Col xs="12" md="6">
                            <Form>
                                <InputGroup>
                                    <Input />
                                    <InputGroupAddon addonType="append">
                                        <Button color="danger">+</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Container>
                </Navbar>
            </>
        );
    }
}