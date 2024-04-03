import Form from '../Form'
//import Illustration from '../Illustration'
import classes from '../../styles/Signup.module.css'
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';
import classs from "../../styles/Layout.module.css"
import Nav from '../Nav';

import {Link} from 'react-router-dom'




export default function Signup(){
    return(
        <>
      <Nav/>
     
     <main className={classs.main}>
        <div  className={classs.container}>
        <h1>
            Create an account
        </h1>
        <div >
            {/* <Illustration/> */}
            <Form className={`${classes.signup}`}>
             <TextInput type="text" placeholder="Enter name" icon="person"/>
             <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
             <TextInput type="password" placeholder="Enter password" icon="lock"/>
             <TextInput type="password" placeholder="Confirm password" icon="lock_clock"/>
             <Checkbox text="I agree to the Terms &amp; Conditions"/>
             <Button>
             <span>Submit now</span> 
             </Button>
             <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
            </Form>
        </div>
      

        </div>

       
     </main>
      
        
        
        </>
    );
}