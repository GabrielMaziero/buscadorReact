import React, { Component } from 'react';
import {
    Navbar, Input, Button, InputGroup, InputGroupAddon, Container, Col, Row, Form, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Spinner
} from 'reactstrap';
import logo from '../img/logo.gif';
import { MdSearch } from 'react-icons/md'
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
    state = {
        carregando: false,
        meteoro: []
    }


    buscar = async (event) => {
        event.preventDefault()

        this.setState({ carregando: true })

        const form = event.target;
        const InputGroup = form.children[0];
        const Input = InputGroup.children[0];
        // const { seguidores: data } = await axios(`https://api.github.com/users/${Input.value}/followers`);
        // const seguidores = await axios(`https://api.github.com/users/${Input.value}/followers`);
        const meteoro = await axios(`https://api.nasa.gov/planetary/apod?date=${Input.value.split('/').reverse().join('-')}&api_key=dLWTwQ3R9palgSVGoujnkBFxvkrTdA746JRndfzv`);
        this.setState({ meteoro: [meteoro.data, ...this.state.meteoro], carregando: false });
        // this.setState({ meteoro })
    }
    render() {
        return (
            <>
                <Navbar color="dark">
                    <Container className="d-flex justify-content-center">
                        <img className="rounded-circle border border-white mr-3" width="50" src="https://www.thispersondoesnotexist.com/image" alt="pessoa aleatoria" />
                        <span className="text-white">Logado como <Link className="text-white font-weight-bold ml-3" to="/">{this.props.match.params.usuario}</Link></span>
                    </Container>

                </Navbar>
                <Navbar color="dark" fixed="bottom">
                    <Container className="d-flex justify-content-center">
                        <Col xs="12" md="6">
                            <Form onSubmit={this.buscar}>
                                <InputGroup>
                                    <Input type="date" />
                                    <InputGroupAddon addonType="append">
                                        <Button color="danger">
                                            {this.state.carregando ? (<Spinner color="light" size="sm" />) : (<MdSearch size="20" />)}
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </Form>
                        </Col>
                    </Container>
                </Navbar>
                {this.state.meteoro.length === 0 && (
                    <Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <img className="rounded-circle border border-white mr-3" width="400" src="https://cdn.dribbble.com/users/1809003/screenshots/5705402/nasa_logo_animation-jmanimation.gif" alt="pessoa aleatoria" />
                        <span></span>

                    </Container>
                )}
                {/* {this.state.carregando &&
                    (<Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <Spinner color="success" size="lg" />
                        <span>Carregando...</span> */}
                {this.state.carregando ?
                    (<Container className="h-100 d-flex flex-column justify-content-center align-items-center">
                        <Spinner color="success" size="lg" />
                        <span>Carregando...</span>

                    </Container>) : (
                        <Container className="mt-3 mb-5">
                            <Row>
                                {this.state.meteoro.map((meteoro) => (
                                    <Col className="d-flex mb-4" xs="12" md="4">
                                        <Card className="text-white mb-2" color="dark">
                                            <CardImg top width="100%" height="30%" src={meteoro.url} alt={meteoro.title} />
                                            <CardBody>
                                                <CardTitle className="h3 text-center">{meteoro.title}</CardTitle>
                                                <CardSubtitle className="text-muted text-center">{meteoro.date.split('-').reverse().join('/')}</CardSubtitle>
                                                <CardText className="text-justify">{meteoro.explanation}</CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    )}
            </>
        );
    }
}