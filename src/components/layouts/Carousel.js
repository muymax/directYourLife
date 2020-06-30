import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import car1 from "../assets/car1.jpg";
import car2 from "../assets/car2.jpg";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.jpg";

export class BootstrapCarousel extends Component {
	render() {
		return (
			<div>
				<div className='container-fluid'>
					<div className='row title' style={{ marginBottom: "20px" }}>
						<div className='col-sm-12 btn btn-warning'>Photo Gallery</div>
					</div>
				</div>
				<div className='container-fluid'>
					<Carousel interval={1000} keyboard={false} pauseonhover={true}>
						<Carousel.Item style={{ height: "300px" }}>
							<img
								style={{ height: "300px" }}
								className='d-block w-100'
								src={car1}
								alt='../assets/car1.jpg'
							/>
							<Carousel.Caption>
								<h3>First Demo </h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: "300px" }}>
							<img
								style={{ height: "300px" }}
								className='d-block w-100'
								src={car2}
								alt='../assets/car2.jpg'
							/>
							<Carousel.Caption>
								<h3>Second Demo</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: "300px" }}>
							<img
								style={{ height: "300px" }}
								className='d-block w-100'
								src={car3}
								alt='../assets/car3.jpg'
							/>
							<Carousel.Caption>
								<h3>Third Demo</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ height: "300px" }}>
							<img
								style={{ height: "300px" }}
								className='d-block w-100'
								src={car4}
								alt='../assets/car4.jpg'
							/>
							<Carousel.Caption>
								<h3>fourth Demo</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		);
	}
}

export default BootstrapCarousel;
