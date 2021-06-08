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
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverComponentTwo from './components/HoverComponentTwo';
import User from './components/User';
import Counter_Render_Props from './components/Counter_Render_Props';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './Hooks/HookCounter';
import HookCounterTwo from './Hooks/HookCounterTwo';
import HookCounterThree from './Hooks/HookCounterThree';
import HookCounterFour from './Hooks/HookCounterFour';
import EffectHookCounterOne from './Hooks/UseEffect/EffectHookCounterOne';
import ClassCounterOne from './Hooks/UseEffect/ClassCounterOne';
import ClassMouse from './Hooks/UseEffect/ClassMouse';
import HookMouse from './Hooks/UseEffect/HookMouse';
import MouseContainer from './Hooks/UseEffect/MouseContainer';
import IntervalClassCounter from './Hooks/UseEffect/IntervalClassCounter';
import IntervalHookCounter from './Hooks/UseEffect/IntervalHookCounter';
import DataFetching from './Hooks/UseEffect/DataFetching';
import DataFetchingSingle from './Hooks/DataFetchingSingle';
import HookComponentC from './Hooks/UseEffect/HookComponentC';
import ReducerCounterOne from './Hooks/UseReducer/ReducerCounterOne';
import ReducerCounterTwo from './Hooks/UseReducer/ReducerCounterTwo';
import ReducerCounterThree from './Hooks/UseReducer/ReducerCounterThree';
import UseRCComponentA from './Hooks/UseReducer_With_useContext/UseRCComponentA';
import UseRCComponentB from './Hooks/UseReducer_With_useContext/UseRCComponentB';
import UseRCComponentC from './Hooks/UseReducer_With_useContext/UseRCComponentC';
import CounterOne from './Hooks/UseReducer/ReducerCounterOne';
import React, {useReducer, useContext} from 'react'
import DataFetchingOne from './Hooks/UseReducer_With_UseEffect/DataFetchingOne';
import DataFetchingTwo from './Hooks/UseReducer_With_UseEffect/DataFetchingTwo';
import CBParentComponent from './Hooks/UseCallback/CBParentComponent';
import MemoCounter from './Hooks/UseMemo/MemoCounter';
import FocusInput from './Hooks/UseRef/FocusInput';
import ClassTimer from './Hooks/UseRef/ClassTimer';
import HookTimer from './Hooks/UseRef/HookTimer';

export const HookUserContext = React.createContext()
export const HookChannelContext = React.createContext()

export const CounterContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState
        case "Default":
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <HookTimer />
      <ClassTimer />
      {/* <FocusInput /> */}
      {/* <MemoCounter /> */}
      {/* <CBParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* Global Count : {count}
      <CounterContext.Provider value={{countState : count, countDispatch : dispatch}}>
        <UseRCComponentA />
        <UseRCComponentB />
        <UseRCComponentC />
      </CounterContext.Provider> */}
      {/* <ReducerCounterThree /> */}
      {/* <ReducerCounterTwo /> */}
      {/* <ReducerCounterOne /> */}
      {/* <HookUserContext.Provider value={'Ravi Pandya!'}>
        <HookChannelContext.Provider value={'Codevolution'}>
          <HookComponentC />
        </HookChannelContext.Provider>
      </HookUserContext.Provider> */}
      {/* <DataFetchingSingle /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <ClassCounterOne /> */}
      {/* <EffectHookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
      {/* default value */}
      {/* <UserProvider value="Ravi Pandya!"> */}
        {/* <ComponentC /> */}
      {/* </UserProvider> */}
      {/* <UserProvider value="Ravi Pandya!">
        <ComponentC />
      </UserProvider> */}
       {/* <Counter_Render_Props>
        {(count, countHandler) => (
        <ClickCounterTwo count={count} countHandler={countHandler}/>
        )}
      </Counter_Render_Props>

      <Counter_Render_Props >
        {(count, countHandler) => (
        <HoverComponentTwo count={count} countHandler={countHandler}/>
        )}
      </Counter_Render_Props> */}
      {/* <Counter_Render_Props 
        render={(count, countHandler) => (
        <ClickCounterTwo count={count} countHandler={countHandler}/>
        )}
      />

      <Counter_Render_Props 
        render={(count, countHandler) => (
        <HoverComponentTwo count={count} countHandler={countHandler}/>
      )}
      />*/}
      {/* <ClickCounterTwo />
      <HoverComponentTwo />
      <User name={(isLoggedIn) => {return isLoggedIn ? 'Ravi' : 'Guest'}}/> */}
      {/* <ClickCounter name="Ravi Pandya"/> */}
      {/* <HoverCounter /> */}
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
