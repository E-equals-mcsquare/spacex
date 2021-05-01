import React from 'react';
import styles from './Tile.module.css'

function Tile(props) {
    return (
      <div className={styles.tile}>
          <img className={styles.flightlogo} src={props.flightimageurl} alt={props.missioname}/>
          <div className={styles.missiontitle}>{props.missionname}</div>
          <div className={styles.kpititle}>Mission Ids:</div>
          {props.missionids.map((obj) => {
              return (
                <div className={styles.kpivalue}>&#8226; {obj}</div>
              )
          })}
          <div className={styles.kpititle}>Launch Year: <span className={styles.kpivalue}>{props.launchyear}</span></div>
          <div className={styles.kpititle}>Successful Launch: <span className={styles.kpivalue}>{props.successfullaunch}</span></div>
          <div className={styles.kpititle}>Successful Landing: <span className={styles.kpivalue}>{props.successfulland}</span></div>
      </div>
    );
  }
  
export default Tile;