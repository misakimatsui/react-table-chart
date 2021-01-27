import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/data';
import Sample from './Sample'
import D3LineChart from './d3Line'
import LineExample from "./Line";
import BoxPlot from './boxPlot'


const d3_data =[
    [{x: 0, y: 6},{x: 1, y: 9},{x: 2, y: 6},
        {x: 3, y: 5},{x: 4, y: 2},{x: 6, y: 4},
        {x: 7, y: 2},{x: 8, y: 5},{x: 9, y: 2}]
];

function mapStateToProps(state) {
    return {
        data: state.data,
        token: state.auth.token,
        loaded: state.data.loaded,
        isFetching: state.data.isFetching,
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProtectedView extends React.Component {
    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        const token = this.props.token;
        this.props.fetchProtectedData(token);
    }

    render() {
        return (
            <div>
                <BoxPlot/>
            </div>
        );
    }
}

ProtectedView.propTypes = {
    fetchProtectedData: React.PropTypes.func,
    loaded: React.PropTypes.bool,
    userName: React.PropTypes.string,
    data: React.PropTypes.any,
    token: React.PropTypes.string,
};
