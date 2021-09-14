import React, { useState, useEffect } from 'react';
// import { Typography } from '@material-ui/core';
// import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

// import logo from './images/logo.png';
import  NewsCards from './components/NewsCards/NewsCards';
// import classes from '*.module.css';
import useStyles from './styles';

const alanKey = 'ef7624e85a3641240c9c9a56646aadc52e956eca572e1d8b807a3e2338fdd0dc/stage';
  
const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();


    useEffect(() => {
        alanBtn({
            key : alanKey,
            onCommand: ({ command, articles }) => {
                if(command==='newHeadlines'){
                    // console.log(articles);
                    setNewsArticles(articles);
                }
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" className={classes.alanLogo} alt="alan Logo"/>
            </div>
            <NewsCards articles={newsArticles}/>
        </div>  
    )
}

export default App
