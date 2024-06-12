import { render, screen } from '@testing-library/react';
import { Task } from './Task';
import { Todo } from '../../model/types/todosManager';

const mockedOnToggleTodoComplete = jest.fn();
const mockedTodo: Todo = { id: '1', isCompleted: true, text: 'Cходить в магазин' };

describe('Task.test', () => {
	test('Component is rendered', () => {
		render(<Task todo={mockedTodo} onToggleTodoComplete={mockedOnToggleTodoComplete} />);
		expect(screen.getByTestId('Task')).toBeInTheDocument();
		expect(screen.getByTestId('onToggleTodoComplete')).toBeInTheDocument();
		expect(screen.getByText('Cходить в магазин')).toBeInTheDocument();
	});
});
