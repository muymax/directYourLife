import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import about from '../assets/about.jpg';

const Styles = styled.div`
	.jumbo {
		background: url(${about}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 140px;
		position: relative;
		z-index:-2;
	}

	.overlay {
		background-color:#000;
		opacity: 0.6;
		poaition: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-indez: -1;

	}
`;

const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className='jumbo bg-dark text-white'>
			<div className="overlay"></div>
			<Container>
				<h2>
					Direct Your Life
				</h2>
				<h5>Legal Counselling & Services </h5>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;
