import React, { Component } from 'react';
import './titles.css';

class Titles extends Component {
	render(){ 
	  return (
	    <div>
	    	<h1 className="title-container__title">
	      		Weather Search
	    	</h1>
	    	<h4 className="title-container__subtitle">
				(Made using ReactJs)
	    	</h4>
	    </div>
	  );
	}
}

export default Titles;