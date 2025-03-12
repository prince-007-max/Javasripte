import Button from "./Button/Button.jsx";
import Profilepicture from "./Button/Profilepicture.jsx";
import UserGreeting from "./Button/UserGreeting.jsx"


function App() {
  return(
    <>
    <Button />
    <UserGreeting islogging = {false} Username = "Prince" />
    <Profilepicture></Profilepicture>
    </>

  );
}

export default App