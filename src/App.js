import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';
import './App.css'; 

export default function App() {
  return (
    <div className="app">
      <h1 className="main-title">Assignment-1 Counter Application  React js</h1>
      <div className="row">
        <ClassCounter />
        <FunctionalCounter />
      </div>
    </div>
  );
}
