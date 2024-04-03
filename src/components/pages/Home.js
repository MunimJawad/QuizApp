import React from 'react';
import Nav from '../Nav';
import classes from "../../styles/Layout.module.css"
import Video from '../Videos';

const Home = () => {
    return (
       <>
      <Nav/>
     
     <main className={classes.main}>
        <div  className={classes.container}>
        <Video/>
        </div>

       
     </main>
  
       
        </>
    );
};

export default Home;