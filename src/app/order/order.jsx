import { Container, Row, Col, Card } from "reactstrap";
import pageNames from "../global/header/pageNames";

const { default: Header } = require("../global/header/header")

const Order = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col lg='8'>
                    <Card body>
                        <Row>
                            <Col lg='3'>

                            </Col>
                            <Col lg='6'>

                            </Col>
                            <Col lg='3'>

                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col lg='4'>
                    <Card body>

                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Order;