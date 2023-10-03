import Congratulations from "./components/Congratulations";
import Gallery from "./components/Gallery";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import PackingList from "./components/PackingList";
import LightSwitch from "./components/LightSwitch";
import Signup from "./components/Signup";
import Toolbar from "./components/Toolbar";
import Form from "./components/Form";
import FeedbackForm from "./components/FeedbackForm";





function App() {
  return (
    <div >
      <FeedbackForm/>
      <Form/>
      <Toolbar/>
      <Signup/>
      <LightSwitch/>
      <PackingList/>
      <TodoList/>
      <Congratulations/>
      <Gallery/>
      <Profile/>
      
    </div>
  );
}


export default App;
