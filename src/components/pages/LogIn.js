import Form from "../Form";
import TextInput from "../TextInput";
import Checkbox from '../Checkbox';
import Button from '../Button';
import Nav from '../Nav';
import classes from "../../styles/Layout.module.css"
import classe from '../../styles/Login.module.css'

export default function LogIn(){
   return(
    

<>
<Nav/>
<main className={classes.main}>
 <div  className={classes.container}>
 <Form className={`${classe.signup}`}>
        <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
        <TextInput type="password" placeholder="Enter password" icon="lock"/>
        <Checkbox text="I agree to the Terms &amp; Conditions"/>
             <Button>
               <span>Submit now</span> 
               
             </Button>
     </Form>
 </div>
 </main>

 </>
   );
}