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
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import PersonList from './components/PersonList';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import InlineStyles from './components/InlineStyles';
import './appStyles.css'
import styles from './appStyles.module.css'
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import Fragement from './components/Fragement';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ParentFocus from './components/ParentFocus';
import FRParentInput from './components/FRParentInput';
import Portal from './components/Portal';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      {/* <ErrorBoundry>
        <Hero name="BatMan"/>
      </ErrorBoundry>

      <ErrorBoundry>
        <Hero name="SuperMan"/>
      </ErrorBoundry>

      <ErrorBoundry>
        <Hero name="Joker"/>
      </ErrorBoundry> */}
      {/* <Portal /> */}
      {/* <FRParentInput /> */}
      {/* <ParentFocus /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Fragement /> */}
      {/* <Table /> */}
      {/* <LifecycleA /> */}
      {/* <Forms /> */}
      {/* <h1 className='error'>Error from App.js</h1> */}
      {/* <h1 className={styles.success}>Success from App.js</h1> */}
      {/* <InlineStyles /> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <PersonList /> */}
      {/* <ConditionalRendering /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
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
