import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { asyncIncrement, decrement, increment } from './actions/counterAction';
import { toggleTheme } from './actions/themeActions';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const isDarkTheme = useSelector(state => state.darkTheme.isDarkTheme)


  const handleAdd = () => {
    dispatch(increment())
  };

  const handleSubtract = () => {
    dispatch(decrement())
  };

  const handleAsync = () => {
    dispatch(asyncIncrement())
  };
  const switchTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={`container ${isDarkTheme ? 'dark' : ''}`}>
      <h1 className="heading">
        <span>Redux</span>
        <button className="btn btn-info" onClick={switchTheme}>Сменить тему</button>
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