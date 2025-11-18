import React from 'react';
import ReactDOM from 'react-dom/client'

function Greeting(){
    return (
        <>
            <Person />
            <Message />
        </>
    );
}

const Person = () => <h2>john doe</h2>;
const Message = () => { return <h2>this is my message</h2>;}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
