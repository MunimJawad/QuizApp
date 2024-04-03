import Answers from './Answers';
import classes from '../styles/Question.module.css'


export default function Question(){

    return(

        <div className={classes.question}>
            <div className={classes.qtitle}>
              <span class="material-icons-outlined"> help_outline </span>
              Here goes the question from Learn with Munim?
            </div>
            <Answers/>
       </div>
    );
}