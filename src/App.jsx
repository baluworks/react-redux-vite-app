// import redux store provider
import {Provider} from "react-redux";
import "./App.css";
import store from "./store/configStore.js";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import routes from "./routes.jsx";
function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
