import React, { Component } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import { appBg, theme } from '../Index';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	container: {
        flex: 1,
    },
	backgroundImage:{
	    flex:1,
	    resizeMode: 'cover',
	    width:null,
	    width:null,
	    backgroundColor:'rgba(0,0,0,0)',
	},
	content: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	inputContent: {
		flex: 1,
		flexDirection: 'column',
      	justifyContent: "center",
		alignItems: "center",
		height: '100%'
	},
	text: {
		color: '#fff',
	},
	specialText: {
		fontWeight: 'bold',
		fontSize: 40
	},
	topInfo: {
		flex: 1,
		flexDirection: 'row',
      	justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		backgroundColor: 'rgba(255,255,255,0.2)'
	}
});

class StaticIncome extends Component {
    static navigationOptions = {
        title: '静态收益',
    }
	constructor (props) {
	    super(props);
	}
	render () {
		const { machine_specifications,frozen_money } = this.props;
		const currentGet = Number(machine_specifications) * 0.015;
		console.log(this.props);
		return (
			<View style={styles.container}>
				<ImageBackground source={appBg} style={styles.backgroundImage}>
					<View style={styles.content}>
						<View style={styles.topInfo}>
							<Text style={styles.text}>矿机规格: {machine_specifications}</Text>
							<Text style={styles.text}>总收益: {frozen_money}</Text>
						</View>
						<View style={styles.inputContent}>
							<Text style={[styles.text, styles.specialText]}>今日收益</Text>
							<Text style={[styles.text, styles.specialText]}>{currentGet}</Text>
						</View>
					</View>
			    </ImageBackground>
			</View>
		)
	}
}
export default connect((state)=>{return state})(StaticIncome)
