// import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import Map from '../components/Map';
import SafeArea from '../components/SafeArea';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = ({ isFocused }) => {
	const {
		addLocation,
		state: { recording },
	} = useContext(LocationContext);
	const callback = useCallback(
		(location) => {
			addLocation(location, recording);
		},
		[recording]
	);
	const [err] = useLocation(isFocused || recording, callback);

	return (
		<SafeArea>
			<Text h2 h2Style={{ fontWeight: '300' }}>
				Create a Track
			</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}

			<TrackForm submitBtnText='Start Recording' />
		</SafeArea>
	);
};

TrackCreateScreen.navigationOptions = {
	title: 'Add Track',
	tabBarIcon: <FontAwesome name='plus' size={20} color='black' />,
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
