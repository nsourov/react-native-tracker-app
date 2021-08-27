import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
	switch (action.type) {
		case 'SAVE_TRACKS':
			return action.payload;
		default:
			return state;
	}
};

const fetchTracks = (dispatch) => async () => {
	try {
		const res = await trackerApi.get('/tracks');
		dispatch({ type: 'SAVE_TRACKS', payload: res.data });
	} catch (error) {
		console.log(error);
	}
};

const createTrack = (dispatch) => async (name, locations) => {
	try {
		await trackerApi.post('/tracks', { name, locations });
	} catch (error) {
		console.log(error);
	}
};

export const { Context, Provider } = createDataContext(
	trackReducer,
	{ createTrack, fetchTracks },
	[]
);
