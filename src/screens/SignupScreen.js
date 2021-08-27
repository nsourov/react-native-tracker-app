import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import Navlink from '../components/Navlink';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = () => {
	const { state, signup, clearError } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearError} />
			<AuthForm
				headerText='Sign Up for Tracker'
				submitBtnText='Sign up'
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/>
			<Navlink
				text='Already have an account? Sign in instead'
				routeName='Signin'
			/>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

export default SignupScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
});
