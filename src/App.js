import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { rootReducer } from './reducers/rootReducer';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const isDarkTheme = useSelector(state => state.darkTheme.isDarkTheme)


  const handleAdd = () => {
    dispatch({ type: 'INCREMENT' })
  };

  const handleSubtract = () => {
    dispatch({ type: 'DECREMENT' })
  };

  const handleAsync = () => {
    // setTimeout(() => {
    //   setCounter(counter + 1);
    // }, 1000);
  };
  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' })
  }

  return (
    <div className={`container ${isDarkTheme ? 'dark' : ''}`}>
      <h1 className="heading">
        <span>Redux</span>
        <button className="btn btn-info" onClick={toggleTheme}>Сменить тему</button>
      </h1>

      <hr />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Счетчик: <span id="counter">{counter}</span></h5>
          <button className="btn btn-primary" onClick={handleAdd}>Добавить</button>
          <button className="btn btn-danger" onClick={handleSubtract}>Убрать</button>
          <button className="btn btn-success" onClick={handleAsync}>Async</button>
        </div>
      </div>
    </div>
  );
}

export default App;