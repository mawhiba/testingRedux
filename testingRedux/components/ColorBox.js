import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class ColorBox extends Component {
    render(){
        return(
            <TouchableOpacity style={{height: 50 , width: 50 , backgroundColor: this.props.Color}}>

            </TouchableOpacity>
        )
    }
}

const Props = (state) => {
    return({
        Number: state.Number,
        Color: state.Color
    })
}

export default connect(Props)(ColorBox)
