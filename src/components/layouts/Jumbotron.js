import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	font-size: 10px;
	text-align: center;
	color: black;
	`;

const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className='Jumbo bg-dark text-white'>
			<Container>
				<h1>
					Welcome to Direct Your Life 
				</h1>
				<h4>A community to help guide you through the Canadian Legal System</h4>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;