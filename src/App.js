import "./App.css"
import Button from "./Button";
import InputField from "./InputField";
import LoginBox from "./LoginBox";

function App() {
  return (
    <>
      <div> Hello Welcome</div>
      <Button/>
      <div className="login-box">
        <LoginBox/>
        {/* <InputField/> */}
        <Button/>

      </div>
    </>
  );
}

export default App;
