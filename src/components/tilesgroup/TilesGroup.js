import React, { Component } from "react";
import styles from "./TilesGroup.module.css";
import Tile from "./tile/Tile";
import { connect } from 'react-redux';

class TilesGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      busystate: false,
    };
  }
  componentDidMount() {
    this.setState({
      busystate: true,
    });
    this.updateData()
  }

  componentDidUpdate() {
    this.updateData()
  }

  updateData = () => {
    let serviceUrl = this.props.serviceUrl
    fetch(serviceUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
          busystate: false,
        });
      })
      .catch((error) => {
        this.setState({
          data: ["No Data Available"],
        });
      });
  }

  render() {
    return (
      <div className={styles.tilesgroup}>
        {this.state.data.map((obj) => {
          let flightimageurl = obj.links.flickr_images[2];
          if (!flightimageurl) {
            flightimageurl =
              "https://www.spacex.com/static/images/mission/mission-slider-02.webp";
          }
          
          let missionids = obj.mission_id
          if (missionids.length < 1) {
              missionids = ["Not Available"]
          }
          
          let successfullaunch = obj.launch_success;
          if (successfullaunch != null) {
            successfullaunch = successfullaunch.toString();
          } else {
            successfullaunch = "Not Available";
          }
          let successfulland = obj.rocket.first_stage.cores[0].land_success;
          if (successfulland != null) {
            successfulland = successfulland.toString();
          } else {
            successfulland = "Not Available";
          }
          return (
            <Tile
              flightimageurl={flightimageurl}
              missionids={missionids}
              missionname={obj.mission_name + " " + obj.flight_number}
              launchyear={obj.launch_year}
              successfullaunch={successfullaunch}
              successfulland={successfulland}
            />
          );
        })}
      </div>
    );
  }
}

const dashboardStateToPros = (state) => {
  return { ...state.dashboard };
};
export default (connect(dashboardStateToPros))(TilesGroup)