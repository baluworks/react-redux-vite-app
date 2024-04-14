// import redux store provider
import {Provider} from "react-redux";
import "./App.css";
import store from "./store/configStore.js";
import Home from "./features/home/home";
function App() {
  return (
    <>
      {/*  Global menu Heresrc/App.jsx */}
      {/* <!-- rest of the components here -->*/}
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
