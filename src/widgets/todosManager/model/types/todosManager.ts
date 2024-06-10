export interface TodosManager {}

export interface Todo {
	isCompleted: boolean;
	text: string;
}

export type TodosSort = 'all' | 'active' | 'completed';
