import React from "react";
import { Col, Row } from "react-bootstrap";

const Datescounts = ({person}) => {

    return(
        <Row className="justify-content-center my-2">
        <Col sm="8" className= "">
          You Have {person.length} Dates Today.
        </Col>
        </Row>
    )
}

export default Datescounts;