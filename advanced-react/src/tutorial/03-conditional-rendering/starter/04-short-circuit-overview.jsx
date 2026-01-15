import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('eren');



  return <div>
    {}
    <h4>falsy or : {text || 'hello world'}</h4>
    <h4>falsy and : {text && 'hello world'}</h4>
    <h4>truthy or : {name || 'hello world'}</h4>
    <h4>truthy and : {name && 'hello world'}</h4>
  </div>;
};
export default ShortCircuitOverview;
