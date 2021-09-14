import {makeStyles} from '@material-ui/core/styles';


export default makeStyles({
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },

    media:{
        height: 250,
    },
    card:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        // fullHeightCard: '100%',
    },
    details:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    title:{
        padding:'0px 16px',
        // height: 'webkit-fill-available',
    },
    cardActions:{
        padding: '0px 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },

});