import { useState, useCallback, useEffect } from "react";
import "./App.css";
import Colorbar from "./components/Colorbar";

function App() {
  const [length, setLength] = useState(8);
  const [charAllow, setCharAllow] = useState(false);
  const [numAllow, setNumAllow] = useState(false);
  const [password, setPassword] = useState("");



  const passwordGenerator = useCallback(() => {                             //This useCallback hook is used for optimisation we can write code without this too
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "~!@#$%^&*(){}_+>?][|,./";
    }
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);




  useEffect(() => {                                             //This function is used to execute passwordGenerator when any of dependencies in [] bracket change
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);



  return (
    <div className="d-flex flex-column align-items-center" style={{width:"100%"}}>
      <div
        className="d-flex flex-column p-4 justify-self-center"
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          width:"fit-content"
        }}
      >
        <p className="mb-4 h1">Password Generator</p>
        <div className="mb-3 d-flex flex-row">
          <textarea
            style={{ fontSize: "25px", fontWeight: "bold" }}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            value={password}
            readOnly
          ></textarea>
          <button className="btn btn-primary" onClick={passwordGenerator}><b>new</b></button>
        </div>
        <label htmlFor="customRange1" className="form-label">
          Number of characters: <b>{length}</b>
        </label>
        <br />
        <div className="d-flex flew-row">
          <input
            type="range"
            className="form-range mx-2"
            id="customRange1"
            min={5}
            max={15}
            style={{ width: "33%" }}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <div className="form-check mx-2" style={{ width: "30%" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value={numAllow}
              id="flexCheckDefault1"
              onChange={() => setNumAllow(numAllow === false ? true : false)}
            />{" "}
            
            
            <label className="form-check-label" htmlFor="flexCheckDefault1">   {/* First way of setting onchange(using expression) */}
              Numbers allowed
            </label>
          </div>
          <div className="form-check mx-2" style={{ width: "30%" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value={charAllow}
              id="flexCheckDefault2"
              onChange={() => setCharAllow((prev) => !prev)}
            />{" "}
            <label className="form-check-label" htmlFor="flexCheckDefault2">  {/* Second way of setting onchange(using prev property of hooks by which we can access value of previous hook in lambda func)*/}
            
              Characters allowed
            </label>
          </div>
        </div>
      </div>
      <Colorbar />
    </div>
  );
}

export default App;
