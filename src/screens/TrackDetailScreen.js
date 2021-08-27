import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
	const { state } = useContext(TrackContext);
	const _id = navigation.getParam('_id');
	const track = state.find((track) => track._id === _id);

	return (
		<>
			<Text style={{ fontSize: 20 }}>{track.name}</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					...track.locations[0].coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				<Polyline
					coordinates={track.locations.map((loc) => loc.coords)}
					strokeColor={'#000'}
					strokeWidth={5}
					lineDashPattern={[1]}
				/>
			</MapView>
		</>
	);
};

TrackDetailScreen.navigationOptions = () => {
	return {
		title: 'Go to tracks',
	};
};

export default TrackDetailScreen;

const styles = StyleSheet.create({
	map: {
		height: 200,
	},
});
