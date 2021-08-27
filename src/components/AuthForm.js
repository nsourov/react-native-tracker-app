import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnText }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<Spacer>
				<Text h3 h3Style={{ fontWeight: '500' }}>
					{headerText}
				</Text>
			</Spacer>
			<Input
				label='Email'
				value={email}
				onChangeText={setEmail}
				autoCapitalize='none'
				autoCorrect={false}
			/>
			<Input
				label='Password'
				value={password}
				onChangeText={setPassword}
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
			/>
			{errorMessage ? (
				<Text style={styles.errorMessage}>{errorMessage}</Text>
			) : null}
			<Spacer>
				<Button
					title={submitBtnText}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
};

export default AuthForm;

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
		marginTop: 15,
	},
});
