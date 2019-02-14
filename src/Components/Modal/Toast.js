import React, { Component } from 'react';
import { View, Text, Animated } from "react-native";
import { connect } from 'react-redux';
const Styles = {
    container: {
        position: 'absolute',
        left: '50%',
        bottom: 100,
    },
    inner: {
        position: 'relative',
        right: '50%',
        backgroundColor: 'rgba(255, 255, 255, .2)',
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        fontSize: 16,
        color: '#fff',
    }
}
class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fade: new Animated.Value(0),
            duration: 500,
            showTime: 500,
        };
    }
    test = () => console.log('test')
    show = () => {
        let animeFade = Animated.sequence([
            Animated.timing(
                this.state.fade,
                {
                  toValue: 1,
                  duration: this.state.duration,
                }
            ),
            Animated.delay(this.state.showTime),
            Animated.timing(
                this.state.fade,
                {
                  toValue: 0,
                  duration: this.state.duration,
                }
            )
        ]);
        animeFade.start();
    }
    componentDidMount () {
        this.props.onRef(this);
    }
    render() {
        const { message } = this.props;
        return (
            <Animated.View style={{opacity: this.state.fade}}>
                <View style={Styles.container}>
                    <View style={Styles.inner}>
                        <Text style={Styles.text}>{message}</Text>
                    </View>
                </View>
            </Animated.View>
        )
    }
}
export default connect(
    (state, ownProps) => {
        console.log('toast map state to props');
        return {
            message: state.message,
        }
    }
)(Toast);