import React from 'react'
import SingleQuestion from './SingleQuestion';

const Questions = ({questions}) => {

  return ( 
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((questions)=>{
            return <SingleQuestion key={questions.id} {...questions} />;
        })}
    </section>
  );
}

export default Questions;
