import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size='large' style={{ marginTop: 20 }} />;
	}

	return (
		<View>
			<MapView
				style={styles.map}
				initialRegion={{
					...currentLocation.coords,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			>
				<Circle
					center={currentLocation.coords}
					radius={40}
					strokeColor='rgba(158, 158, 255, 1.0)'
					fillColor='rgba(158, 158, 255, 0.3)'
				/>
				<Polyline
					coordinates={locations.map((loc) => loc.coords)}
					strokeColor={'#000'}
					strokeWidth={5}
					lineDashPattern={[1]}
				/>
			</MapView>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({
	map: {
		height: 200,
	},
});
