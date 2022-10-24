import "./App.scss";
import { GlobalStorage } from "./contexts/GlobalStorage";
import { Home } from "./pages/Home";

function App() {
  return (
    <GlobalStorage>
      <Home />
    </GlobalStorage>
  );
}

export default App;
