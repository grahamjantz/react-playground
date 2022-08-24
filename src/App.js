import './App.css'
import { React } from 'react';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import Notes from './components/Notes';

const App = () => {
  return(
    <div className="App">
      <Counter />
      <Greeting />
      <Notes />
    </div>
  )
}

export default App