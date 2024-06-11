import logo from './logo.svg';
import './App.css';
import UseStateHook from './hooks/UseStateHook';
import Child from './hooks/useContextHook/Child';
import UseContextHook from './hooks/useContextHook/UseContextHook';
import UseRefHook from './hooks/UseRefHook';
import UseReducerHook from './hooks/UseReducerHookCounter';
import UseReducerToDo from './hooks/UseReducerToDo';
import UseCallBackHook from './hooks/UseCallBackHook';
import UseMemoHook from './hooks/UseMemoHook';
import Board from './components/tic-tac-toe/Square';
import Game from './components/tic-tac-toe/Game';


function App() {
  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
