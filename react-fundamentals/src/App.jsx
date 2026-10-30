import "./App.css";
import { Welcome } from "./components/Welcome";
import Button from "./components/Button";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1>Hello Julien!</h1>
      <Welcome />
      <Button />
      <UserProfile />
    </div>
  );
}

export default App;
