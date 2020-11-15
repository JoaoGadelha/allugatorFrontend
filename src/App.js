import './App.css';
import SearchWindow from './Components/SearchWindow/SearchWindow'
import SearchResultWindow from './Components/SearchResultWindow/SearchResultWindow'
import { Provider } from './Context'

function App() {
  return (
    <Provider>
      <div className="App">
        <SearchWindow />
        <SearchResultWindow />
      </div>
    </Provider>
  );
}

export default App;
