import './App.css';
import {
  StateTutorial,
  ReducerTutorial,
  EffectTutorial,
  RefTutorial,
  LayoutEffectTutorial,
  ImperativeHandle,
  ContextTutorial,
  MemoTutorial,
  CallbackTutorial,
} from './components';

function App() {
  return (
    <div className="App">
      <StateTutorial />
      <ReducerTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutEffectTutorial />
      <ImperativeHandle />
      <ContextTutorial />
      <MemoTutorial />
      <CallbackTutorial />
    </div>
  );
}

export default App;
