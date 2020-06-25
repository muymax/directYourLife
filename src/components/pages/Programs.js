import React, { Component } from "react";
import { Container} from 'react-bootstrap';
import Jumbotronprograms from '../../components/layouts/Jumbotronprograms.js';

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
                </Container>
			</div>
		);
	}
}

export default Programs;