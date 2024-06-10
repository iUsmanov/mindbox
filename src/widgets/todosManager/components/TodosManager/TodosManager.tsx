import { memo, useCallback, useMemo, useState } from 'react';
import cls from './TodosManager.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Task } from '../Task/Task';
import { Todo, TodosSort } from '../../model/types/todosManager';
import { initialTodos } from '../../model/consts/todosManager';
import { AddTodo } from '../AddTodo/AddTodo';
import { TabItem } from '@/shared/ui/Tabs';
import { Menu } from '../Menu/Menu';
import { v4 } from 'uuid';
import { HStack } from '@/shared/ui/Stack';

interface TodosManagerProps {
	className?: string;
}

export const TodosManager = memo((props: TodosManagerProps) => {
	const { className } = props;
	const [todos, setTodos] = useState<Record<string, Todo>>({ ...initialTodos });
	const [allTodosIds, setAllTodosIds] = useState<string[]>(['1', '2', '3', '4', '5', '6', '7', '8']);
	const [completedTodosIds, setCompletedTodosIds] = useState<string[]>(['1', '2', '6', '8']);
	const [noCompletedTodosIds, setNoCompletedTodosIds] = useState<string[]>(['3', '4', '5', '7']);
	const [todosSort, setTodosSort] = useState<TodosSort>('all');

	const currentTodosIds = useMemo(() => {
		const mapper: Record<TodosSort, string[]> = {
			all: allTodosIds,
			active: noCompletedTodosIds,
			completed: completedTodosIds,
		};

		return mapper;
	}, [allTodosIds, completedTodosIds, noCompletedTodosIds]);

	const onChangeTodosSort = useCallback((tab: TabItem<TodosSort>) => {
		setTodosSort(tab.value);
	}, []);

	const addNewTodo = useCallback((todoText: string) => {
		const newId = v4();
		setTodos((prev) => ({ ...prev, [newId]: { id: newId, isCompleted: false, text: todoText } }));
		setAllTodosIds((prev) => [...prev, newId]);
		setNoCompletedTodosIds((prev) => [...prev, newId]);
	}, []);

	const onToggleTodoComplete = useCallback(
		(id: string) => {
			const isCompleted = todos[id].isCompleted;
			setTodos((prev) => ({ ...prev, [id]: { ...prev[id], isCompleted: !isCompleted } }));
			if (isCompleted) {
				setCompletedTodosIds((prev) => prev.filter((item) => item !== id));
				setNoCompletedTodosIds((prev) => [...prev, id]);
			} else {
				setNoCompletedTodosIds((prev) => prev.filter((item) => item !== id));
				setCompletedTodosIds((prev) => [...prev, id]);
			}
			console.log(todos);
			console.log(completedTodosIds);
			console.log(noCompletedTodosIds);
			console.log('===================');
		},
		[completedTodosIds, noCompletedTodosIds, todos]
	);

	// const onClearCompleted = useCallback(() => {
	// 	const tds = { ...todos };
	// 	const allTdsIds = [...allTodosIds];
	// 	completedTodosIds.forEach((id) => {
	// 		delete tds[id];
	// 		const indexOfId = allTdsIds.indexOf(id);
	// 		allTdsIds.splice(indexOfId, 1);
	// 	});
	// 	setTodos(tds);
	// 	setAllTodosIds(allTdsIds);
	// 	setCompletedTodosIds([]);
	// }, []);

	const onClearCompleted = useCallback(() => {
		completedTodosIds.forEach((id) => {
			console.log(id);
			setTodos((prev) => {
				const result: Record<string, Todo> = {};
				for (const key in prev) {
					if (key !== id) {
						result[key] = prev[key];
					}
				}

				return result;
			});

			const indexOfId = allTodosIds.indexOf(id);
			setAllTodosIds((prev) => {
				return prev.slice(0, indexOfId - 1).concat(prev.slice(indexOfId));
			});
		});
		setCompletedTodosIds([]);
	}, [allTodosIds, completedTodosIds]);

	return (
		<HStack justify='center' align='center' className={classNames(cls.wrapper, {}, [])}>
			<div className={classNames(cls.todosManager, {}, [className])}>
				<div className={cls.title}>todos</div>
				<div className={cls.todosPanel}>
					<AddTodo addNewTodo={addNewTodo} />
					<div className={cls.todos}>
						{currentTodosIds[todosSort].length ? (
							currentTodosIds[todosSort].map((todoId) => {
								const todo = todos[todoId];
								return (
									<Task
										todo={todo}
										key={todo.id}
										onToggleTodoComplete={onToggleTodoComplete}
									/>
								);
							})
						) : (
							<div className={cls.hereIsNoTodos}>Here is no todos</div>
						)}
					</div>
					<Menu
						todosSort={todosSort}
						onChangeTodosSort={onChangeTodosSort}
						leftTodosQuantity={noCompletedTodosIds.length}
						onClearCompleted={onClearCompleted}
					/>
					<div className={cls.firstShadow}></div>
					<div className={cls.secondShadow}></div>
				</div>
			</div>
		</HStack>
	);
});
