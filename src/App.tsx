import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Form } from "./components/FormComponent";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Form>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <div className="field checkbox">
          <input type="checkbox" id="conditionsAccepted" />
          <label htmlFor="conditionsAccepted">
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit">Sign up</button>
      </Form></div>
  );
}

export default App;
