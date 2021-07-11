// Imports
import './App.css';
import configureStore from './store/configuration/configureStore';
import { Provider } from 'react-redux'
import NewProductPage from './pages/product/new';

// Declarations
const store = configureStore()

// Methods
function App() {
  return (
    <Provider store={store}>
      <NewProductPage/>
    </Provider>
  );
}

// Exports
export default App;
