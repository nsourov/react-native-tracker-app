import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { StatusBar } from 'react-native';

const SafeArea = ({ children }) => {
	return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
});
