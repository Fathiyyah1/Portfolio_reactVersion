import { Col, Row } from "react-bootstrap"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{"Hey I'm Fathiyyah"}<span className="wrap"> web developer</span></h1>
                    <p>A curious girl that is looking forward to have a bright future</p>
                    <button></button>
                </Col>
            </Row>
        </section>
    )
}