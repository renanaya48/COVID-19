import React from 'react';

import Cards from './components/Cards/Cards.jsx'
import Chart from './components/Chart/Chart.jsx'
import CountryPicer from './components/CountryPicer/CountryPicer.jsx'

// import {Cards, Chart, CountryPicer} from './components';

import styles from './App.module.css';

import {fetchData} from './api'

class App extends React.Component {

    state = {data: {},}

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData});
    }

    render(){
        const {data} = this.state;
        console.log(data);
        return(
        <div className = {styles.container}>
            <Cards data = {data}/>
            <CountryPicer />
            <Chart />
        </div>
        )
    }

}

export default App;
