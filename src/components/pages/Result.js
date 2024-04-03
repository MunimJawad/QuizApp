
import Analysis from '../Analysis'
import Summary from '../Summary'
import Nav from '../Nav';
import classes from "../../styles/Layout.module.css"

export default function Result(){
    return(
        <>
        <Nav/>
       <main className={classes.main}>
        <div  className={classes.container}>
        <Summary/>
        <Analysis/>
        </div>
        </main>
        
        </>
    );
}