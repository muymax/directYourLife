import React, { Component } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import Jumbotronprograms from '../../components/layouts/Jumbotronprograms.js';
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img28 from "../assets/img28.jpg";
import img31 from "../assets/img31.jpg";
import img34 from "../assets/img34.jpg";
import img35 from "../assets/img35.jpg";

class Programs extends Component {
	render() {
		return (
			<div>
                 <Container fluid className="programs">
                    <Jumbotronprograms />
				<h2>Programs</h2>
				<h3>Services Overview</h3>
				<p>
					DYL believes that all youth, regardless of their developmental, social
					and/or psychological needs, are resilient. We know through our many
					years of experience working with young people and their families –
					that with support from a range of high quality prevention,
					intervention and treatment services – young persons, to the best of
					their abilities, can become contributing members of society and
					productive citizens. Overview
				</p>
				<h3>Programs & Counselling Services</h3>
				<p>
					DYL believes that all youth, regardless of their developmental, social
					and/or psychological needs, are resilient. We know through our many
					years of experience working with young people and their families –
					that with support from a range of high quality prevention,
					intervention and treatment services – young persons, to the best of
					their abilities, can become contributing members of society and
					productive citizens. Overview
				</p>
				<h2 fluid className="h2">
            Services
          </h2>

          <Row>
            <Col>
              <p>
                Social reintegration is often understood as the support given to
                offenders during their reentry into society following
                imprisonment. A broader definition, however, encompasses a
                number of interventions undertaken following an arrest to divert
                offenders away from the criminal justice system to an
                alternative measure, including a restorative justice process or
                suitable treatment.
              </p>
              <p>
                In recent years, more emphasis has been placed on designing
                comprehensive interventions, based on a continuity of care, to
                provide consistent assistance to offenders within and beyond
                prison. There is a recognition that preparation for
                reintegration should commence before the offenders' release.
                After their release, interventions should support their
                immediate transition from the prison to the community and
                reinforce the gains achieved through in prison treatment and
                continue until a successful reintegration is completed (Fox,
                2002).
              </p>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>What we do?</h2>
              <p>
                Direct Your Life is the only support group for offenders in the
                Greater Toronto Area. We provide a support system to help
                at-risk youth or recently released offenders find housing,
                employment and/or schooling support through a variety of
                coaching programs.
              </p>
            </Col>

            <Col>
              <img
                src={img23}
                alt="../assets/img23.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Who we are?</h2>
              <p style={{fontFamily:'helvetica'}}>
                We are a non-profit organization in the Greater Toronto Area run
                by Community Advisors with lived experience navigating the
                criminal justice system in Canada. All members of our team
                aspire to empower our participants by providing the tools and
                mentorship for success.
              </p>
            </Col>

            <Col>
              <img
                src={img24}
                alt="../assets/img24.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Why we serve?</h2>
              <p style={{fontFamily:'helvetica'}}>
                Our objective is to prevent incarceration and recidivism among
                at-risk youth and recently released offenders. Our mentorship
                programs aims to help our participants establish strong
                leadership skills, meaningful connections as well as help guide
                them to a healthy and successful integration back to society.
              </p>
            </Col>

            <Col>
              <img
                src={img25}
                alt="../assets/img25.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <h2 fluid className="h2">
            Programs
          </h2>
          <br />
          <br />

          <Row>
            <Col>
              <p>
                DYL believes that all youth, regardless of their developmental,
                social and/or psychological needs, are resilient. We know
                through our many years of experience working with young people
                and their families – that with support from a range of high
                quality prevention, intervention and treatment services – young
                persons, to the best of their abilities, can become contributing
                members of society and productive citizens. Overviews.
              </p>
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Sports Leadership Development</h2>
              <p>
                Our Sports Leadership Development Program aims to help our youth
                establish strong leadership skills, meaningful connections as
                well as guide them to a healthy and successful integration or
                re-integration to society.
              </p>
            </Col>

            <Col>
              <img
                src={img28}
                alt="../assets/img28.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>Leadership Development Training Program</h2>
              <p>
                Our Leadership Development Program aims to help adults in
                conflict with the law establish strong leadership and life
                skills, as well as meaningful connections to successfully
                reintegrate them back into society.
              </p>
            </Col>

            <Col>
              <img
                src={img31}
                alt="../assets/img31.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />

          <Row>
            <Col>
              <h2>NextGen Builders</h2>
              <p>
                In partnership with Toronto Community Benefits Network, the
                NextGen Builders Program provides support to black youth
                entering the trades industry with experienced construction
                trades professionals.
              </p>
            </Col>

            <Col>
              <img
                src={img34}
                alt="../assets/img34.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <h2>Community Builders</h2>
              <p>
                In association with our partner Crosslinks Transit, we are
                preparing underrepresented populations for jobs in the
                construction industry.
              </p>
            </Col>

            <Col>
              <img
                src={img35}
                alt="../assets/img35.jpg"
                style={{ width: "400px" }}
              />
            </Col>
          </Row>
          <br />
          <br />
                </Container>
                <br></br>
			</div>
		);
	}
}

export default Programs;