import React,{useState} from 'react';
const useLoginForm = (callback) => {
	const [inputs, setInputs] = useState({name:'',email:'',password:'',password2:''});	
  	const handleSubmit = (event) => {
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
		handleSubmit,
	  	handleInputChange,
	  	inputs
	};
}
export default useLoginForm;
