import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class RedBox extends Component {
    onPress(){
        this.props.dispatch({type: 'Increase'});
        this.props.dispatch({type: 'change_color', color: 'red'})
    }
    render(){
        return(
            <TouchableOpacity style={{height: 50 , width: 50 , backgroundColor: 'red'}} onPress = {() => 
            this.onPress()
            }>

            </TouchableOpacity>
        )
    }
}

const Props = (state) => {
    return({
        Number: state.Number
    })
}

export default connect(Props)(RedBox)

