import "./App.css";
import About from "./Components/AboutUs/About";
import Company from "./Components/Company/Company";
import Counter from "./Components/Counter/Counter";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Todos from "./Components/Todos/Todos";
import Movies from "./Containers/Movies";
function App() {
  return (
    <div className="App">
      <h1>Welcome to unit testing world!</h1>
      <hr />
      <About />
      <hr />
      <Company name="Cognizant Technologies " />
      <hr />
      <Counter />
      <hr />
      <Movies url={"http://www.imdb.com"} />
      <hr />
      <ThemeSwitcher />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
