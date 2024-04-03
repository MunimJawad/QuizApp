import classes from "../styles/Account.module.css"

import {Link} from 'react-router-dom'


export default function Account(){
 return(
  <div class={classes.account}>
        <span class="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">LogIn</Link>
       {/* <span class="material-icons-outlined" title="Logout"> logout </span>  */}
      </div>
 );
}