import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RedBox from '../components/RedBox';
import BlueBox from '../components/BlueBox';
import ColorBox from '../components/ColorBox';
import {connect} from 'react-redux';

class MainScreen extends Component {
    render(){
        console.log(this.props)
        return(
            <View style = {{flex:1 , backgroundColor: 'white', justifyContent:'center'}}>
                <ColorBox/>
                <Text style={{fontSize: 24}}>{this.props.Number}</Text>
                <RedBox/>
                <BlueBox/>
            </View>
        )
    }
}

const Props = (state) => {
    return({
        Number: state.Number
    })
}
//export default MainScreen;
export default connect(Props)(MainScreen)