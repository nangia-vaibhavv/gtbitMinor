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
            src={require("../images/delivery.jpg")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
      <Row noGutters className="text-center align-items-center pizza-cta">
        <Col>
          <p className="looking-for-pizza">
          Now No need to travel in crowded city to drop a parcel            <i className="fas fa-door-open pizza-slice"></i>
          </p>
          <Button
            color="none"
            className="book-cust-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            P2P Partners
          </Button>
        </Col>
      </Row>


      <AboutPageContent/>
      <GalleryPageContent/>
    
    </div>
  );
};
