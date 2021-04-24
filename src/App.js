import './App.css';
import {Provider} from 'react-redux';
import store from './redux/Store'
import CakeComponent from './components/CakeComponent';
import IceCreemComponent from './components/IceCreemComponent'
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HooksObj from './components/HooksObj';

function App() {
  console.log(store.getState());
  return (
    <Provider store = {store}>
    <div className="App">
      {/* <ClassCounter /> */}
      <HookCounter/>
      <HooksObj />
      <CakeComponent/>
      <IceCreemComponent/>
      </div>
      </Provider>
  );
}

export default App;
