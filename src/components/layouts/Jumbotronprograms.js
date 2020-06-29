import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
	font-size: 10px;
	text-align: center;
	color: red;
`;

const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className='Jumbo bg-dark text-white'>
			<Container>
				<h1>
					Programs
				</h1>
				<h3>What programs Direct Your Life can offer with registration</h3>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;