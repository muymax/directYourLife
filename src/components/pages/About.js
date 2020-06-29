import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import olu from "../assets/olu.png";
import advisor1 from "../assets/advisor1.png";
import advisor2 from "../assets/advisor2.png";

class About extends Component {
	render() {
		return (
			<div>
				<Container fluid className='about'>
					<h2>About Us</h2>
					<Row>
						<Col>
							<p>
								DIRECT YOUR LIFE understands that correctional institutions have
								become a melting pot of untapped potential. Over 90% of inmates
								arrive at these institutions without a high school diploma,
								while over 70% have never made it past the ninth grade. Once
								equipped with the proper life skills, education and
								reintegration coaching, the potential for a successful
								reintegration back to society is more likely.
							</p>

							<p>
								Our objective is to make positive changes in the community
								through a Restorative Approach. This approach is essential to
								produce a real and lasting transformation in the lives of
								individuals. DIRECT YOUR LIFE coaches these individuals on
								building good habits that foster success, while also providing
								meaningful connections and a positive support system.
							</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>Founder</h2>
							<p>
								Olusola Olumogba is a former collegiate athlete who had dreams
								of playing professional football. After graduating from the
								University of Western Ontario, he pursued professional football
								opportunities that never came to fruition. After doing a brief
								stint as a CFL agent, he found his passion as a pro scout and
								established InstantScouting in 2011. Olusola is committed to
								ensuring that athletes do not face the same obstacles he faced
								on his journey to the pros. Since the launch of InstantScouting,
								Olusola has helped create opportunities for athletes in numerous
								leagues and has been awarded one of the Top 30 Under Thirty
								Award by Sports Launch Magazine.
							</p>
							<p>
								In 2007, Olusola faced his biggest life challenge of being
								embroiled in the criminal justice system. Ultimately, a few
								wrong choices led to his incarceration. During his time in
								prison and upon release, he realized that there was little
								support and resources available to recently released
								individuals. While he was lucky to have close family and friends
								help get him back on his feet, he realized that most individuals
								similar to his position do not.
							</p>
							<p>
								Olusola began to focus his efforts on providing resources for
								other similar individuals in need of positive coaching for a
								successful reintegration back into society. He strongly believes
								that if he can lead by example, he can show other correctional
								residents that there is hope for a positive life after
								incarceration. Olusola began to focus his efforts on providing
								tools and guidance to others in conflict with the law who want
								to rebuild their lives. This is how Direct Your Life was born.
							</p>
						</Col>

						<Col>
							<img
								src={olu}
								alt='../assets/olu.png'
								style={{ width: "400px" }}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>Advisor</h2>
							<p>
								Hello world Lorem ipsum dolor sit amet, magna lacinia donec enim
								id. Sagittis eget porttitor mattis libero orci ut. Nullam
								tristique quisque urna eget, erat justo, libero libero, congue
								nisl donec nam nulla quis id, eget cras tortor urna vitae at eu.
								Integer integer vitae pellentesque vehicula euismod, et amet ac
								malesuada vitae. Cras ac integer, nullam urna consectetuer nibh
								fusce ullamcorper in. In placerat suscipit, massa laborum lorem
								amet vestibulum, sed culpa sit parturient facilisis nonummy
								perferendis. Elit mauris aliquam dui. Mauris lorem dui congue
								pellentesque wisi, hac quam vestibulum ipsum mauris. Semper
								eget, quis suscipit nullam mollis, sociis unde dictumst sed id
								suspendisse. Sed et eu cras, aliquam lectus venenatis, tempus
								sit vivamus platea suscipit justo, risus hendrerit sollicitudin
								quam porttitor hymenaeos.
							</p>
						</Col>

						<Col>
							<img
								src={advisor1}
								alt='../assets/advisor1.png'
								style={{ width: "400px" }}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<h2>Advisor</h2>
							<p>
								Lorem ipsum dolor sit amet, magna lacinia donec enim id.
								Sagittis eget porttitor mattis libero orci ut. Nullam tristique
								quisque urna eget, erat justo, libero libero, congue nisl donec
								nam nulla quis id, eget cras tortor urna vitae at eu. Integer
								integer vitae pellentesque vehicula euismod, et amet ac
								malesuada vitae. Cras ac integer, nullam urna consectetuer nibh
								fusce ullamcorper in. In placerat suscipit, massa laborum lorem
								amet vestibulum, sed culpa sit parturient facilisis nonummy
								perferendis. Elit mauris aliquam dui. Mauris lorem dui congue
								pellentesque wisi, hac quam vestibulum ipsum mauris. Semper
								eget, quis suscipit nullam mollis, sociis unde dictumst sed id
								suspendisse. Sed et eu cras, aliquam lectus venenatis, tempus
								sit vivamus platea suscipit justo, risus hendrerit sollicitudin
								quam porttitor hymenaeos.
							</p>
						</Col>

						<Col>
							<img
								src={advisor2}
								alt='../assets/advisor2.png'
								style={{ width: "300px" }}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default About;
