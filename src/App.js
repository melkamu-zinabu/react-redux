
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store/Store';
import Cakecontainer from './component/Cakecontainer';
import Hookcakecontainer from './component/Hookcakecontainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cakecontainer/>
      <Hookcakecontainer/>
    </div>
    </Provider>
  );
}

export default App;
