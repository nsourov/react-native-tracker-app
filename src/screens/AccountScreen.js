import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import SafeArea from '../components/SafeArea';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<SafeArea>
			<Text h3 h3Style={{ fontWeight: '500' }}>
				AccountScreen
			</Text>
			<Spacer>
				<Button onPress={signout} title='Sign out' />
			</Spacer>
		</SafeArea>
	);
};

AccountScreen.navigationOptions = {
	tabBarIcon: <FontAwesome name='gear' size={20} color='black' />,
};

export default AccountScreen;

const styles = StyleSheet.create({});
