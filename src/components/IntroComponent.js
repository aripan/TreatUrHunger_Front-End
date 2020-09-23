import React from "react";
import { Jumbotron } from "reactstrap";

function Intro() {
  return (
    <div>
      <Jumbotron>
        <div className="row row-header">
          <div className="col-12 col-sm-6">
            <h1>Treat Ur Hunger</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className="col-12 col-sm-6 introImg">
            <img
              src="/assets/images/intro.png"
              alt="Intro-pic"
              width="100%"
              height="auto"
              className="d-none d-sm-block d-md-block"
            />
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Intro;
