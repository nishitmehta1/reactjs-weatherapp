import React, { Component } from 'react';

const Weather = props =>{
	return (
		<div>
		  Weather
		  { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
		  { props.temperature && <p>Temperature: {props.temperature}</p>}
		  { props.humidity && <p>Humidity: {props.humidity}</p>}
		  { props.desc && <p>Conditions: {props.desc}</p>}
		  { props.error && <p>{props.error}</p>}
		</div>
	);
}

export default Weather;
