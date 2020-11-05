import React, { useState, createContext } from 'react';

export const AnswerContext = createContext();
export const AnswerChangeContext = createContext();

const initialState = [
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
	{
		pointsLeft: 10,
		pointsAwarded: [0, 0, 0, 0, 0, 0, 0, 0, 0],
	},
];

export const AnswerProvider = ({ children }) => {
	const [answer, setAnswer] = useState(initialState);

	return (
		<AnswerContext.Provider value={answer}>
			<AnswerChangeContext.Provider value={setAnswer}>
				{children}
			</AnswerChangeContext.Provider>
		</AnswerContext.Provider>
	);
};
