import React from "react";
import { Row, Col, Button } from "reactstrap";
import AboutPageContent from "./aboutpagecontent";
import GalleryPageContent from "./gallerypagecontent";


export default props => {
  return (
    <div>

<Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/guards.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
            If you are worried abut the protection of your house...
            <i className="fas fa-door-open pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-cust-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Book Your Custodian
          </Button>
        </Col>
      </Row>


      <AboutPageContent/>
      <GalleryPageContent/>
    
    </div>
  );
};
