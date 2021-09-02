import "./Global.css"
import { Header, Slidebar } from "./components";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Slidebar />
      </div>
    </div>
  );
}

export default App;
