import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TimeGrid() {
    // TODO: import API info (add as client?) for current time
    //  or is there an npm package/library that can handle time?


    // TODO: change from grid to table?  Looks like table is more interactive
    return (
        <div id="time-grid-container">
            <Container>
                <Row>
                    <Col>Day</Col>
                    <Col>Clock In</Col>
                    <Col>Clock Out</Col>
                    <Col>Clock In</Col>
                    <Col>Clock Out</Col>
                    <Col>Day Total</Col>
                    <Col>Week Total</Col>
                </Row>
                <Row>
                    <Col>Sunday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Monday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Tuesday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Wednesday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Thursday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Friday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>Saturday</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default TimeGrid;
