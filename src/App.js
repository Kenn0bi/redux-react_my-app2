import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from 'react-router-dom';
import { Fade } from './Fade.js';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { Motion, spring } from 'react-motion';

function App() {

  const [isIn, setIsIn] = useState(true);
  const [inProp, setInProp] = useState(true);
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <h1>Bookkeper!</h1>

      <Motion defaultStyle={{x: 0}} style={{x: spring(100)}}>
        {value => <div>Проектов: {value.x.toFixed(2)}</div>}
      </Motion>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state ? "Goodbye, world!" : "Hello, world!"}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
          <button onClick={() => setState(state => !state)}>
            {state ? "Goodbye, world!" : "Hello, world!"}
          </button>
        </CSSTransition>
      </SwitchTransition>

      <CSSTransition in={inProp} timeout = {3000} classNames="my">
        <div>
            Привет, мир! CSSTransition
        </div>
      </CSSTransition>
      <button onClick={()=>setInProp(!inProp)}>CSSTransition</button>

      <Fade in={isIn}/>
      <button onClick={()=>setIsIn(!isIn)}>Не нажимай!</button>
      <nav>
        <Link to="/catalog">Каталог</Link> | {'  '}
        <Link to="/basket">Корзина</Link> | {'  '}
        <Link to="/about">О нас</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
