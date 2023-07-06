import React from "react";
//import light components
import Light from "./Light.jsx";

//traffic light device
const TrafficLight = () => {
	return (
		<div className="d-flex justify-content-center">
			<div className="cable"></div>
			<div className="box">
				<Light />
			</div>
		</div>
	);
};

export default TrafficLight;
