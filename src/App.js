import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import FoodList from './components/FoodList';
import Hello from './components/Hello';
import ItemMain from './components/item/ItemMain';
import TodoTemplate from './components/todo/TodoTemplate';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Join from './components/user/Join';
import Login from './components/user/Login';
//import Calendar from './components/layout/Calendar';

function App() {
  return (
    <>
    <Header/>
    
      {/* <TodoTemplate /> */}
      {/* <Join></Join> */}
      <Login></Login>
    <Footer/>
    </>
    
  );
}

export default App;
