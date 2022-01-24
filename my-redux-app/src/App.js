import "./App.css";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
