import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import ShowHide from "../components/ShowHide";

function Nomad() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);
    useEffect(() => {
      console.log("I run only once");
    }, []);
    useEffect(() => {
      console.log("I run when 'keyword' changes.");
    }, [keyword]);
    useEffect(() => {
      console.log("I run when 'counter' changes.");
    }, [counter]);
  
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <Button text={"Continue"} />
        <br />
        <ShowHide />
        <button><Link to="CodingApple">CodingApple</Link></button><br/>
        <button><Link to="NomadCoins">NomadCoins</Link></button>
        <hr />
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        />
        <h1>{counter}</h1>
        <button onClick={onClick}>Click me</button>
      </div>
    );
}

export default Nomad;