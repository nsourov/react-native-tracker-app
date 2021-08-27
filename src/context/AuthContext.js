import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ERROR':
			return { ...state, errorMessage: action.payload };
		case 'CLEAR_ERROR':
			return { ...state, errorMessage: '' };
		case 'SIGNOUT':
			return { ...state, token: '' };
		case 'SIGNIN':
			return { ...state, errorMessage: '', token: action.payload };
		default:
			return state;
	}
};

const clearError = (dispatch) => () => dispatch({ type: 'CLEAR_ERROR' });

const tryLocalSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'SIGNIN', payload: token });
		navigate('TrackList');
	} else {
		navigate('loginFlow');
	}
};

const signup =
	(dispatch) =>
	async ({ email, password }) => {
		try {
			const res = await trackerApi.post('/signup', { email, password });
			const { token } = res.data;
			await AsyncStorage.setItem('token', token);
			dispatch({ type: 'SIGNIN', payload: token });
			navigate('TrackList');
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'ADD_ERROR',
				payload: 'Something went wrong with signup',
			});
		}
	};

const signin =
	(dispatch) =>
	async ({ email, password }) => {
		try {
			const res = await trackerApi.post('/signin', { email, password });
			const { token } = res.data;
			await AsyncStorage.setItem('token', token);
			dispatch({ type: 'SIGNIN', payload: token });
			navigate('TrackList');
		} catch (error) {
			console.log(error);
			dispatch({
				type: 'ADD_ERROR',
				payload: 'Something went wrong with sigin',
			});
		}
	};

const signout = (dispatch) => () => {
	dispatch({ type: 'SIGNOUT' });
	navigate('loginFlow');
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, tryLocalSignin, clearError },
	{ token: null, errorMessage: '' }
);
