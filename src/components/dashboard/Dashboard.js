import React, { Component } from 'react'
import { connect } from 'react-redux'
import FilterPanel from '../filterpanel/FilterPanel'
import TilesGroup from '../tilesgroup/TilesGroup'
import styles from './Dashboard.module.css'

class Dashboard extends Component {
    constructor(props) {
        super (props)
    }
    render() {
        return (
            <div className={styles.dashboard}>
                <FilterPanel/>
                <TilesGroup />
            </div>
        )
    }
}

const dashboardStateToPros = (state) => {
    return { ...state.dashboard };
  };
export default connect(dashboardStateToPros)(Dashboard)