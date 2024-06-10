import { TabItem } from '@/shared/ui/Tabs';
import { Todo, TodosSort } from '../types/todosManager';

export const maxTodoLength = 30;

export const todosSortTabs: TabItem<TodosSort>[] = [
	{
		content: 'All',
		value: 'all',
	},
	{
		content: 'Active',
		value: 'active',
	},
	{
		content: 'Completed',
		value: 'completed',
	},
];

export const initialTodos: Record<string, Todo> = {
	'1': { id: '1', isCompleted: true, text: 'Cходить в магазин' },
	'2': { id: '2', isCompleted: true, text: 'Покормить кота' },
	'3': { id: '3', isCompleted: false, text: 'Пообедать' },
	'4': { id: '4', isCompleted: false, text: 'Купить телефон' },
	'5': { id: '5', isCompleted: false, text: 'Решить задачу' },
	'6': { id: '6', isCompleted: true, text: 'Устроиться на работу' },
	'7': { id: '7', isCompleted: false, text: 'Получить зарплату' },
	'8': { id: '8', isCompleted: true, text: 'Lorem ipsum' },
};
