import React from 'react'
import SingleQuestion from './SingleQuestion';

const Questions = ({questions, activeId, toggleQuestion}) => {

  return ( 
    <section className='container'>
        <h1>Questions</h1>
        {questions.map((questions)=>{
            return <SingleQuestion key={questions.id} {...questions} 
            activeId={activeId}
            toggleQuestion={toggleQuestion}/>;
        })}
    </section>
  );
}

export default Questions;
