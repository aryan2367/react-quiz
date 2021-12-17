import React from 'react';
import { NavLink } from 'react-router-dom';
const StartQuiz =()=>{

return(

<div className="login-form start-form">
 
    <div className="action">
      
    <NavLink to="/QuestionTest" className="link button">Start Test</NavLink>
    </div>
 
</div>
)
}
export default StartQuiz;