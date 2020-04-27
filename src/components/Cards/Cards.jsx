import React  from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

// class Cards extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Cards</h1>
//             </div>
//         );
//     }
// }

//destructuring

//const Cards  = (props) =>{
//    const Cards  = (confirmed, recovered, deaths, lastUpdate) =>{

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  //console.log(props);
  if(!confirmed){
      return 'Loading.....'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography>Infected</Typography>
            <Typography variant="h5"> <CountUp start={0} end={confirmed.value} duration={1.5} separator="," /> </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography>Recovered</Typography>
            <Typography variant="h5"> {/* // {recovered.value} */}{" "} <CountUp start={0} end={recovered.value} duration={1.5} separator="," /> </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Recovered cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography>Deaths</Typography>
            <Typography variant="h5"> <CountUp start={0} end={deaths.value} duration={1.5} separator="," />{" "} </Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2"> Number of Deaths cases of COVID-19 </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;