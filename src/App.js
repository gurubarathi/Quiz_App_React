import React from "react";
import question from "./components/question";
import { useState } from "react";
function App() {
  const [questionIndex,setQuestionIndex]=useState(0);
  const present_question=question[questionIndex];
  const[score,setScore]=useState(0);
  const [results,setResults]=useState(false)
  const replay=()=>{
    setQuestionIndex(0);
    setScore(0);
    setResults(false);
  }
  const get_Choice=(i)=>{
    if(present_question.answer===i){
      setScore(score+1);
    }
    const next_question=questionIndex+1
    if(next_question<question.length){
    setQuestionIndex(questionIndex+1);}
    else{
      setResults(true);
    }
  }
  return (

    <div className="quiz_box">
      {results?(<><h2>Your Score is={score}</h2>
      <button onClick={replay} className="play_again_btn">Play Again</button>
      </>):(
      <div className="quiz_question">
        {present_question.question}
      
      <div className="quiz_box_options ">
        <ul className="quiz_ul">
          {present_question.option.map((option,i)=>
          {return<li className="quiz_li"
          onClick={()=>get_Choice(i)} >{option}</li>})
          }
        </ul>
      </div>
    </div>)}
    </div>
  );
}

export default App;
