import { memo, useCallback, useState } from 'react';
import cls from './AddTodo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Arrow } from '@/shared/ui/Arrow';
import { Input } from '@/shared/ui/Input';
import { Todo } from '../../model/types/todosManager';

interface AddTodoProps {
	className?: string;
	setTodos: React.Dispatch<React.SetStateAction<Record<string, Todo>>>;
}

export const AddTodo = memo((props: AddTodoProps) => {
	const { className, setTodos } = props;
	const [newTodo, setNewTodo] = useState<string>('');
	// const [name, setName] = useState<string>('');

	// const onChangeName = useCallback((value: string) => {
	// 	console.log(name);
	// 	setName(value);
	// 	console.log(name);
	// }, []);

	const onChangeNewTodo = useCallback((value: string) => {
		console.log(newTodo);

		setNewTodo(value);
		console.log(newTodo);
	}, []);

	const addNewTodo = useCallback(() => {
		const newId = String(Math.random());
		setTodos((prev) => ({ ...prev, newId: { id: newId, isCompleted: false, text: newTodo } }));
	}, []);

	return (
		<HStack className={classNames(cls.addTodo, {}, [className])} align='center'>
			<Button variant='clear' onClick={addNewTodo}>
				<Arrow size='x' course='bottom' />
			</Button>
			<Input
				onChange={onChangeNewTodo}
				value={newTodo}
				size='x'
				placeholder='What needs to be done?'
				className={cls.addTodoInput}
			/>
			{/* <input
				type='text'
				value={name}
				onChange={(e) => onChangeName(e.target.value)}
				style={{ background: 'red' }}
			/> */}
		</HStack>
	);
});

/* 		"react": "^18.3.1",
		"react-dom": "^18.3.1",
		"react-router-dom": "^6.23.1" */
