import Answers from "../Answers"
import ProgressBar from '../ProgressBar'
import MiniPlayer from '../MiniPlayer'
import Nav from '../Nav';
import classes from "../../styles/Layout.module.css"

export default function Quiz(){
    return(
        <>
        
        <Nav/>
       <main className={classes.main}>
        <div  className={classes.container}>
        <h1>Pick Three of your Star Wars Films</h1>
        <h4>Question can have multiple answers</h4>
        <Answers/>
        <ProgressBar/>
        <MiniPlayer/>
        </div>
        </main>
        
        
        </>
    );
}