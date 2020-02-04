import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class BlueBox extends Component {
    
    onPress(){
        this.props.dispatch({type: 'Decrease'});
        this.props.dispatch({type: 'change_color', color: 'blue'})
    }

    render(){
        return(
            <TouchableOpacity style={{height: 50 , width: 50 , backgroundColor: 'blue'}} onPress = {() => this.onPress()}>

            </TouchableOpacity>
        )
    }
}

const Props = (state) => {
    return({
        Number: state.Number
    })
}

export default connect(Props)(BlueBox)

