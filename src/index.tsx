import { render } from "react-dom"
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { App } from "./components/App/App"
import configureStore from "./components/Store/store"

const store = configureStore

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 