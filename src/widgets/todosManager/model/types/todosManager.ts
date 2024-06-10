export interface TodosManager {}

export interface Todo {
	id: string;
	isCompleted: boolean;
	text: string;
}

export type TodosSort = 'all' | 'active' | 'completed';
