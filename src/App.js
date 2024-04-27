import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { asyncIncrement, decrement, increment } from './actions/counterAction';
import { toggleTheme } from './actions/themeActions';
import { THEME_DARK, THEME_LIGHT } from './constants/themeColor';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const themeColor = useSelector(state => state.theme.value)
  const isDisableBtn = useSelector(state => state.isDisabledBtn.value)


  const handleAdd = () => {
    dispatch(increment())
  };

  const handleSubtract = () => {
    dispatch(decrement())
  };

  const handleAsync = () => {
    dispatch(asyncIncrement())
  };
  const changeTheme = () => {
    const newTheme = themeColor === THEME_LIGHT ? THEME_DARK : THEME_LIGHT
    dispatch(toggleTheme(newTheme))
  }

  return (
    <div className={`container ${themeColor}`}>
      <h1 className="heading">
        <span>Redux</span>
        <button className="btn btn-info" onClick={changeTheme} disabled={isDisableBtn}>Сменить тему</button>
      </h1>

      <hr />

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Счетчик: <span id="counter">{counter}</span></h5>
          <button className="btn btn-primary" onClick={handleAdd} disabled={isDisableBtn}>Добавить</button>
          <button className="btn btn-danger" onClick={handleSubtract} disabled={isDisableBtn}>Убрать</button>
          <button className="btn btn-success" onClick={handleAsync} disabled={isDisableBtn}>Async</button>
        </div>
      </div>
    </div>
  );
}

export default App;