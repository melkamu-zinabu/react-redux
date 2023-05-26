
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store/Store';
import Cakecontainer from './component/Cakecontainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cakecontainer/>
    </div>
    </Provider>
  );
}

export default App;
