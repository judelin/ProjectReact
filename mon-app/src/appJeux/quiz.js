import React from 'react';

function Quiz(){
	handleAnswerChange(event){
		if(event.key === 'y'){
			alert('The sky is your starting point!')
	}
		else if (event.key === 'n') {
			alert('The sky is your limit👀')
	}
}

	return (
		<div>
				<p> Are You Smart?</p>
					<input type="text" value={answer} onKeyPress={handleAnswerChange}/>
				<small> Press Y for Yes or N for No</small>
	</div>
)
}

export default Quiz;