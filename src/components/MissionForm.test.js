import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import MissionForm from './MissionForm';

test( 'MissionsForm renders correctly', () => {
	render(<MissionForm />)
})

test( 'Renders the message when isFetchingData is True', () => {
	render(<MissionForm isFetchingData={true}/>)
	const value = screen.queryByText('we are fetching data')
	expect(value).not.toBeNull();
})

test( 'Renders button when isFetchingData is false', () => {
	render(<MissionForm isFetchingData={false} />);
	const value = screen.queryByRole('button')
	expect(value).not.toBeNull();
})

test('Calls getData when button is pressed', () => {
	const mockGetData = jest.fn( () => {})
	render(<MissionForm getData={mockGetData} />);
	const button = screen.getByRole('button');
	fireEvent.click(button)
	console.log(mockGetData.mock)
	expect(mockGetData.mock.calls).toHaveLength(1);
})