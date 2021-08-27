import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
	const { state, signin, clearError } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearError} />
			<AuthForm
				headerText='Sign in for Tracker'
				submitBtnText='Sign in'
				errorMessage={state.errorMessage}
				onSubmit={signin}
			/>
			<Navlink text='Do not have account? Sign up instead' routeName='Signup' />
		</View>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default SigninScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
});
