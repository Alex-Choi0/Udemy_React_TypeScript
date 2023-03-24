import React from 'react';
import './App.css';
import CounterManagement from './components/CounterManagement';

interface AppState{
  change : boolean
}

class App extends React.Component<{}, AppState> {
  constructor(props : {}){
    super(props);
    this.state = {
      change : false
    }
  }

  clickButton = () => {
    this.setState({change : !this.state.change})
  }

  render(): React.ReactNode {
  return (
    <>
    <h1>My App</h1>
    <CounterManagement ownerName='Alex' />
    </>
  )
    
  }
}

// function App(){
//   return (
//     <>
//     <h1>My App</h1>
//     <CounterManagement ownerName='Alex' />
//     </>
//   )
// }

export default App;
