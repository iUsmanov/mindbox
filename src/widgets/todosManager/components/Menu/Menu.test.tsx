import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';
import { TodosSort } from '../../model/types/todosManager';
import { userEvent } from '@testing-library/user-event';

const mockedLeftTodosQuantity = 21;
const mockedOnChangeTodosSort = jest.fn();
const mockedOnClearCompleted = jest.fn();
const mockedTodosSort: TodosSort = 'all';

describe('Menu.test', () => {
	test('Component is rendered', () => {
		render(
			<Menu
				leftTodosQuantity={mockedLeftTodosQuantity}
				onChangeTodosSort={mockedOnChangeTodosSort}
				onClearCompleted={mockedOnClearCompleted}
				todosSort={mockedTodosSort}
			/>
		);
		expect(screen.getByTestId('TodosMenu')).toBeInTheDocument();
		expect(screen.getByTestId('TodosTabs')).toBeInTheDocument();
		expect(screen.getByText('All')).toBeInTheDocument();
		expect(screen.getByText('Completed')).toBeInTheDocument();
		expect(screen.getByText('Active')).toBeInTheDocument();
		expect(screen.getByText(`${mockedLeftTodosQuantity} items left`)).toBeInTheDocument();
		expect(screen.getByText(`Clear completed`)).toBeInTheDocument();
	});
	test('Click on `onClearCompleted`', async () => {
		render(
			<Menu
				leftTodosQuantity={mockedLeftTodosQuantity}
				onChangeTodosSort={mockedOnChangeTodosSort}
				onClearCompleted={mockedOnClearCompleted}
				todosSort={mockedTodosSort}
			/>
		);

		await userEvent.click(screen.getByText(`Clear completed`));
		expect(mockedOnClearCompleted).toHaveBeenCalledTimes(1);
	});
	test('Click on `activity`', async () => {
		render(
			<Menu
				leftTodosQuantity={mockedLeftTodosQuantity}
				onChangeTodosSort={mockedOnChangeTodosSort}
				onClearCompleted={mockedOnClearCompleted}
				todosSort={mockedTodosSort}
			/>
		);

		const activeTab = screen.getByText('Active');
		await userEvent.click(activeTab);
		expect(mockedOnChangeTodosSort).toHaveBeenCalledTimes(1);
	});
});
