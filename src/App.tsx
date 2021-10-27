import React from 'react';
import './App.css';
import FormTask from './components/FormTask';
import Navbar from './components/Navbar';

interface Props {
  title?: string;
}

function App({ title }: Props) {
  return (
   <div>
     <Navbar />
     <div className="container">
     <h1>{title}</h1>
      <FormTask />
     </div>
    </div>
  );
}

export default App;
