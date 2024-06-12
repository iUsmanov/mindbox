import { render, screen } from '@testing-library/react';
import { AddTodo } from './AddTodo';

const mockedAddNewTodo = jest.fn();

describe('AddTodo.test', () => {
	test('Component is rendered', () => {
		render(<AddTodo addNewTodo={mockedAddNewTodo} />);
		expect(screen.getByTestId('AddTodo')).toBeInTheDocument();
		expect(screen.getByTestId('addNewTodoAndClean')).toBeInTheDocument();
		expect(screen.getByTestId('addTodoInput')).toBeInTheDocument();
	});
	// test('I', () => {
	// 	const newTodoInitialState = 'a';
	// 	const isLengthLimitedInitialState = false;
	// 	React.useState = jest
	// 		.fn()
	// 		.mockReturnValueOnce([newTodoInitialState, {}])
	// 		.mockReturnValueOnce([isLengthLimitedInitialState, {}]);

	// 	render(<AddTodo addNewTodo={addNewTodo} />);
	// 	expect(screen.getByTestId('addTodoInput')).toHaveValue('a');
	// });
});
