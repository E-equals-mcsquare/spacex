import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./FilterPanel.module.css";

class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busystate: false,
      dataUnique: [],
      launchland: ["True", "False"],
      yearevent: "",
      samecounter: 0,
      doubleclickstateyear: 0,
      yearclicked: false,
    };
  }
  componentDidMount() {
    this.setState({
      busystate: true,
    });

    this.onLoadYears();
    this.applyFilter();
  }

  onLoadYears = () => {
    let serviceUrl = process.env.REACT_APP_SERVICE_URL;
    fetch(serviceUrl)
      .then((response) => response.json())
      .then((json) => {
        let data = json;
        const dataUnique = [];
        const map = new Map();
        for (const item of data) {
          if (!map.has(item.launch_year)) {
            map.set(item.launch_year, true);
            dataUnique.push({
              launch_year: item.launch_year,
            });
          }
        }

        this.setState({
          dataUnique: dataUnique,
        });
      })
      .catch((error) => {
        this.setState({
          dataUnique: [{ launch_year: "No Data Available" }],
        });
      });
  };

  componentDidUpdate() {
    // let allElements = document.getElementsByClassName(styles.filterselected);
    // for (var i = 0; i < allElements.length; i++) {
    //   allElements[i].className = styles.filter;
    // }
    // if (this.state.yearevent.target !== undefined) {
    //   this.state.yearevent.target.className = styles.filterselected;
    // }
  }

  onFilterByYear = (event) => {
    let locationParams = window.location.href.split("/");

    let launchyear = event.currentTarget.innerText;

    let successfullaunch = locationParams[locationParams.length - 2];
    let successfulland = locationParams[locationParams.length - 1];

    let currentClass = event.target.className;
    if (currentClass.includes("filterselected")) {
      event.target.className = styles.filter;
      this.props.history.replace(
        `/0/` + successfullaunch + `/` + successfulland
      );
    } else {
      event.target.className = styles.filterselected;
      this.props.history.replace(
        `/` + launchyear + `/` + successfullaunch + `/` + successfulland
      );
    }

    this.applyFilter();
  };

  onFilterByLaunch = (event) => {
    let locationParams = window.location.href.split("/");

    let successfullaunch = event.currentTarget.innerText;

    let launchyear = locationParams[locationParams.length - 3];
    let successfulland = locationParams[locationParams.length - 1];

    let currentClass = event.target.className;
    if (currentClass.includes("filterselected")) {
      event.target.className = styles.filter;
      this.props.history.replace(
        `/` + launchyear + `/0/` + successfulland
      );
    } else {
      event.target.className = styles.filterselected;
      this.props.history.replace(
        `/` + launchyear + `/` + successfullaunch + `/` + successfulland
      );
    }

    this.applyFilter();
  };

  onFilterByLand = (event) => {
    let locationParams = window.location.href.split("/");

    let successfulland = event.currentTarget.innerText;

    let successfullaunch = locationParams[locationParams.length - 2];
    let launchyear = locationParams[locationParams.length - 3];

    let currentClass = event.target.className;
    if (currentClass.includes("filterselected")) {
      event.target.className = styles.filter;
      this.props.history.replace(
        `/` + launchyear + `/` + successfullaunch + `/0`
      );
    } else {
      event.target.className = styles.filterselected;
      this.props.history.replace(
        `/` + launchyear + `/` + successfullaunch + `/` + successfulland
      );
    }

    this.applyFilter();
  };

  applyFilter = () => {
    let locationParams = window.location.href.split("/");

    let successfulland = locationParams[locationParams.length - 1];
    let successfullaunch = locationParams[locationParams.length - 2];
    let launchyear = locationParams[locationParams.length - 3];

    if (launchyear === '0'&& successfullaunch === '0'&& successfulland === '0') {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl: process.env.REACT_APP_SERVICE_URL,
      });
    } else if (
      launchyear === '0'&&
      successfullaunch === '0'&&
      successfulland !== '0'
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&land_success=" +
          successfulland.toLowerCase(),
      });
    } else if (
      launchyear === '0'&&
      successfullaunch !== '0'&&
      successfulland === '0'
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&launch_success=" +
          successfullaunch.toLowerCase(),
      });
    } else if (
      launchyear === '0'&&
      successfullaunch !== '0'&&
      successfulland !== '0'
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&launch_success=" +
          successfullaunch.toLowerCase() +
          "&land_success=" +
          successfulland.toLowerCase(),
      });
    } else if (
      launchyear !== '0'&&
      successfullaunch === '0'&&
      successfulland === 0
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL + "&launch_year=" + launchyear,
      });
    } else if (
      launchyear !== '0'&&
      successfullaunch === '0'&&
      successfulland !== '0'
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&launch_year=" +
          launchyear +
          "&land_success=" +
          successfulland.toLowerCase(),
      });
    } else if (
      launchyear !== '0'&&
      successfullaunch !== '0'&&
      successfulland === 0
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&launch_year=" +
          launchyear +
          "&launch_success=" +
          successfullaunch.toLowerCase(),
      });
    } else if (
      launchyear !== '0'&&
      successfullaunch !== '0'&&
      successfulland !== '0'
    ) {
      this.props.dispatch({
        type: "serviceUrl",
        serviceUrl:
          process.env.REACT_APP_SERVICE_URL +
          "&launch_year=" +
          launchyear +
          "&launch_success=" +
          successfullaunch.toLowerCase() +
          "&land_success=" +
          successfulland.toLowerCase(),
      });
    }
  };

  render() {
    let locationParams = window.location.href.split("/");
    let launchyear = locationParams[locationParams.length - 3];
    let successfullaunch = locationParams[locationParams.length - 2];
    let successfulland = locationParams[locationParams.length - 1];

    return (
      <div className={styles.filterpanel}>
        <div className={styles.header}>Filters</div>
        <div className={styles.filtertitle}>Launch Year</div>
        <div className={styles.filtergroup}>
          {this.state.dataUnique.map((obj) => {
            let filterstyleyear = "";
            if (launchyear === obj.launch_year) {
              filterstyleyear = styles.filterselected;
            } else {
              filterstyleyear = styles.filter;
            }

            return (
              <div key={obj.launch_year} className={filterstyleyear} onClick={this.onFilterByYear}>
                {obj.launch_year}
              </div>
            );
          })}
        </div>
        <div className={styles.filtertitle}>Succesful Launch</div>
        <div className={styles.filtergroup}>
          {this.state.launchland.map((obj) => {
            let filterstylelaunch = "";
            if (
              (successfullaunch === "True" && obj === "True") ||
              (successfullaunch === "False" && obj === "False")
            ) {
              filterstylelaunch = styles.filterselected;
            } else {
              filterstylelaunch = styles.filter;
            }
            return (
              <div key={obj}
                className={filterstylelaunch}
                onClick={this.onFilterByLaunch}
              >
                {obj}
              </div>
            );
          })}
        </div>
        <div className={styles.filtertitle}>Succesful Landing</div>
        <div className={styles.filtergroup}>
          {this.state.launchland.map((obj) => {
            let filterstyleland = "";
            if (
              (successfulland === "True" && obj === "True") ||
              (successfulland === "False" && obj === "False")
            ) {
              filterstyleland = styles.filterselected;
            } else {
              filterstyleland = styles.filter;
            }
            return (
              <div key={obj} className={filterstyleland} onClick={this.onFilterByLand}>
                {obj}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const dashboardStateToPros = (state) => {
  return { ...state.dashboard };
};
export default withRouter(connect(dashboardStateToPros)(FilterPanel));
