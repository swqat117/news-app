import { Provider } from 'react-redux';
import AppNavigator from "./navigation/AppNavigation";
import configureStore from './configureStore'


export default function App() {
  
  const store = configureStore()


  return <Provider store={store}><AppNavigator /></Provider>;
}
