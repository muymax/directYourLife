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
					About 
				</h1>
				<h3>Online Advisors/Coaches to offer support and legal advice</h3>
			</Container>
		</Jumbo>
	</Styles>
);

export default Jumbotron;
