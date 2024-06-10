import { memo, useState } from 'react';
import cls from './TodosManager.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Task } from '../Task/Task';
import { Todo } from '../../model/types/todosManager';
import { AddTodo } from '../AddTodo/AddTodo';

interface TodosManagerProps {
	className?: string;
}

const todoss: Todo[] = [
	{ isCompleted: true, text: 'Cходить в магазин' },
	{ isCompleted: true, text: 'Покормить кота' },
	{ isCompleted: false, text: 'Пообедать' },
	{ isCompleted: false, text: 'Купить телефон' },
	{ isCompleted: false, text: 'Решить задачу' },
	// { isCompleted: true, text: 'Устроиться на работу' },
	// { isCompleted: false, text: 'Получить зарплату' },
	// { isCompleted: true, text: 'Lorem ipsum' },
	// { isCompleted: false, text: 'Ipsum lorem' },
];

export const TodosManager = memo((props: TodosManagerProps) => {
	const { className } = props;
	const [todos, setTodos] = useState<Todo[]>(todoss);
	const [completedTodos, setCompletedTodos] = useState<Todo[]>();
	const [noCompletedTodos, setNoCompletedTodos] = useState<Todo[]>();

	return (
		<div className={classNames(cls.todosManager, {}, [className])}>
			<div className={cls.title}>todos</div>
			<div className={cls.todosPanel}>
				<AddTodo />
				{todos.map((todo) => (
					<Task todo={todo} key={todo.text} />
				))}
				<div className={cls.menu}></div>
				{/* ========= */}
				{/* ========= */}
				<div className={cls.firstShadow}></div>
				<div className={cls.secondShadow}></div>
			</div>
		</div>
	);
});
