import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CakeWithPayload from "./components/CakeWithPayload";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <CakeWithPayload />
      </div>
    </Provider>
  );
}

export default App;
