import React, { useEffect } from 'react';
import './Home.css'
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions'
import Sidebar from '../components/Sidebar';
import HomePagination from '../components/paginations/HomePagination';
import HomeCarousel from '../components/HomeCarousel';
import List from '../components/cardColumns/List';

const Home = (props) => {

    useEffect(() => {
        props.fetchData();
    }, []);

    if(props.error){
        return(
        <h4 className="text-danger">
            {props.error.message}
        </h4>)
    }

    return (
        <div className="HomeMainDiv">
            <HomeCarousel />
            <Sidebar/>
            <List data = {props.data}/>
            <HomePagination className="HomeMainPagination"/>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);