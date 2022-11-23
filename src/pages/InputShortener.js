import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inputshort.css";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputContainer">
      <div
        className="logoutt"
        onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}
      >
        <a style={{ color: "orange" }} href="/login">
          Logout
        </a>
      </div>
      <h1 style={{ color: "orange" }}>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
