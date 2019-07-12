import React,{useState} from 'react';
const useDashboardForm = (callback) => {
	const [inputs, setInputs] = useState({});	
  	const handleLogoutClick = (event) => {
    	if (event) {
      		event.preventDefault();
    	}
    	callback();
  	}
	const handleInputChange = (event) => {
		event.persist();
		console.log(inputs);
	  	setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
		console.log(inputs);
	}
	
	return {
		handleLogoutClick,
	  	handleInputChange,
	  	inputs
	};
}
export default useDashboardForm;
