import React, {useEffect, useState} from 'react';
import Question from '../../components/question/question'

const QuestionsPage = function() {
  const [questions, setQuestions] = useState([]);

  async function getQuestions(){
    const response = await fetch('https://opentdb.com/api.php?amount=1');
    const data =  await response.json();
    setQuestions(data.results)
  }

  useEffect(() => { 
    getQuestions();
  }, [])

  useEffect(()=> {
    if(questions) console.log(questions)  
  }, [questions])
  return (
    <div>
      <h1>Questions page</h1>
      {questions ? questions.map((q,i) => (<Question key={i} question={q}></Question>)) : null}
    </div>
  )
}

export default QuestionsPage;