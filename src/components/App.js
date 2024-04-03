import "../styles/App.css"
//import Layout from './Layout';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import LogIn from "./pages/LogIn";

import Quiz from './pages/Quiz'

import Result from "./pages/Result";

import {BrowserRouter,Routes,Route} from 'react-router-dom'






function App(){
  return (
  //  <Router>
  //   <Layout>
  //      <Switch>
  //       <Route exact path="/" component={Home}/>
  //       <Route exact path="/" component={Signup}/>
  //       <Route exact path="/" component={LogIn}/>
  //       <Route exact path="/" component={Quiz}/>
  //       <Route exact path="/" component={Result}/>
       
  //      </Switch>
  //   </Layout>

  //   </Router>


  <BrowserRouter>
  <Routes>
    
     <Route index element={<Home/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<LogIn/>}/>
     <Route path="/quiz" element={<Quiz/>}/>
     <Route path="/result" element={<Result/>}/>
    
   
  </Routes>
  
  </BrowserRouter>


 
  

    
  );
}

export default App;
