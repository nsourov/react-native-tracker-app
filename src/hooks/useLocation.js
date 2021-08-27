import React, { useState, useEffect } from 'react';
import {
	Accuracy,
	requestForegroundPermissionsAsync,
	watchPositionAsync,
} from 'expo-location';

export default (shouldTrack, callback) => {
	const [err, setErr] = useState(null);

	useEffect(() => {
		let subscriber;
		const startWatching = async () => {
			try {
				const { granted } = await requestForegroundPermissionsAsync();
				const sub = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				);
				subscriber = sub;
				if (!granted) {
					throw new Error('Location permission not granted');
				}
			} catch (e) {
				setErr(e);
			}
		};

		if (shouldTrack) {
			startWatching();
		} else {
			// stop watching
			if (subscriber) {
				subscriber.remove();
			}
			subscriber = null;
		}

		return () => {
			if (subscriber) {
				subscriber.remove();
			}
		};
	}, [shouldTrack, callback]);
	return [err];
};
