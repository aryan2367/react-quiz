import React  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import StartQuiz from './components/StartQuiz';
import QuestionTest from './components/QuestionTest';


const App =()=>{


  
    return (
      <div>
        <Router>
        
      
        
                    <Switch> 
                          <Route path = "/" exact component = {Login}></Route>
                          <Route path = "/StartQuiz" exact component = {StartQuiz}></Route>
                          <Route path = "/QuestionTest" exact component = {QuestionTest}></Route>
                                            </Switch>
              
       
        </Router>
      </div>
    )
  }


export default App;