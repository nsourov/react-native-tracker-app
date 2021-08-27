import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import Spacer from './Spacer';

const Navlink = ({ text, navigation, routeName }) => {
	return (
		<Spacer>
			<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		</Spacer>
	);
};

export default withNavigation(Navlink);

const styles = StyleSheet.create({
	link: {
		color: '#00a8ff',
	},
});
