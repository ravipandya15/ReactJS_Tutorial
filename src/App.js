import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
// import { Greet } from './components/Greet'
function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* ---------------functional component -------------*/}
      {/* <Greet name="Saurin" heroName="SuperMan">
        <p>This is inner part of Greet</p>
      </Greet>
      <Greet name="Punit" heroName="BatMan">
        <button>Click</button>
      </Greet> */}
      {/* <Greet name="Kyara" heroName="Wonder Women"/> */}

      {/* ---------------class component -------------*/}
      {/* <Welcome name="Akash" heroName="SuperMan">
        <h3>inner part of Welcome! Happy Coding!</h3>
      </Welcome>
      <Welcome name="Dairya" heroName="BatMan"/> */}
      {/* <Welcome name="Vidhi" heroName="Wonder Women"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
