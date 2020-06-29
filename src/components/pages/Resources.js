import React, { Component } from "react";
import "./Resources.css";
import ReactPlayer from "react-player";

class Resources extends Component {
	render() {
		return (
		<div>
				<h2>Resources</h2>
				<h3>Video Section</h3>
				<div className="card container">
					<div className="row">
						<div className="col-sm card1">
								<ReactPlayer
									url='https://www.youtube.com/watch?v=Qd4mxDwEcJo'
									controls={false}
									className='react-player'
									playing={false}
									width='100%'
									height='100%'
								/>
						</div>
						<br />
						<div className="col-sm card2">
								<ReactPlayer
									url='https://www.youtube.com/watch?v=zTitoHKsyJg'
									controls={true}
									className='react-player'
									playing={false}
									width='100%'
									height='100%'
								/>
						</div>
					</div>
					<br /><br /><br /><br />
					<div className="row">
						<div className="col-sm card1">
							<ReactPlayer
								url='https://www.youtube.com/watch?v=Qd4mxDwEcJo'
								controls={true}
								className='react-player'
								playing={false}
								width='100%'
								height='100%'
							/>
						</div>
						<br />
						<div className="col-sm card2">
							<ReactPlayer
								url='https://www.youtube.com/watch?v=zTitoHKsyJg'
								controls={true}
								className='react-player'
								playing={false}
								width='100%'
								height='100%'
							/>
						</div>
					</div>
			</div><br /><br />
			<div className="card2">
				<h3>Helpful Links</h3>
				<p>www.google.com</p>
			</div>
		</div>
		);
	}
}

export default Resources;
