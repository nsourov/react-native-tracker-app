import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';

import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const {
		startRecording,
		stopRecording,
		changeName,
		state: { name, recording, locations },
	} = useContext(LocationContext);

	const [saveTrack] = useSaveTrack();

	return (
		<Spacer>
			<Input
				label='Enter name'
				value={name}
				onChangeText={changeName}
				autoCapitalize='none'
				autoCorrect={false}
			/>
			{!recording ? (
				<Button title={'Start Recording'} onPress={startRecording} />
			) : (
				<Button title={'Stop'} onPress={stopRecording} />
			)}

			<Spacer></Spacer>
			{!recording && locations.length ? (
				<Button title='Save Recording' onPress={saveTrack} />
			) : null}
		</Spacer>
	);
};

export default TrackForm;

const styles = StyleSheet.create({});
