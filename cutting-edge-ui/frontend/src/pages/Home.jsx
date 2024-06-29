// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import BentoBoxes from '../components/BentoBoxes';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMicrophone, FaWrench} from 'react-icons/fa';

const Home = () => {
    return (
        <Container fluid className=" bg-[#111111] h-screen overflow-hidden d-flex flex-column justify-content-between">
            <Row className="pt-8 pl-8 pr-8 justify-content-between align-items-center">
                <Col xs="auto" className="text-4xl font-bold text-white">One Slice UI</Col>
            </Row>
            <Row className="flex-grow-1 p-8">
                <BentoBoxes />
            </Row>
            <Row className="pr-8 pl-8 pb-5 align-items-center justify-content-between">
                <Col xs="auto">
                    <Button variant="primary" className=' p-2' style={{
                            backgroundColor: 'transparent', // Removes the background
                            border: '1px solid rgba(255, 255, 255, 0.5)' // Adds a white border with 0.2 opacity
                    }}>
                        <FaMicrophone size={24}/> {/* Microphone icon for Speech */}
                    </Button>
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                    <Form.Control type="search" placeholder="Search" className='p-2 text-white' style={{
                            backgroundColor: 'transparent', // Removes the background
                            border: '1px solid rgba(255, 255, 255, 0.5)' // Adds a white border with 0.2 opacity
                    }}/>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" className=' p-2' style={{
                            backgroundColor: 'transparent', // Removes the background
                            border: '1px solid rgba(255, 255, 255, 0.5)' // Adds a white border with 0.2 opacity
                    }}>
                        <FaWrench size={24}/> {/* Wrench icon for Settings */}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;