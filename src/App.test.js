import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import App from './App'

import mockFetchedMissions from './api/fetchMissions'
jest.mock('./api/fetchMissions');

test('renders without errors', () => {
	render( <App /> )
})

test('fetches and reaches mission data', async () => {
	render(  <App /> )
	mockFetchedMissions.mockResolvedValueOnce({
		data: [
			{ mission_name: 'Missions 1', mission_id: 'mission 1' },
			{ mission_name: 'Missions 2', mission_id: 'mission 2' },
		],
	});
	const button = screen.getByRole('button')
	fireEvent.click(button)

	await waitFor( () => screen.getByText('Missions 1'))

	expect(screen.getAllByTestId('mission')).toHaveLength(2)
})