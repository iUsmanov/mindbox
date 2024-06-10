import { memo, useCallback, useState } from 'react';
import cls from './AddTodo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Arrow } from '@/shared/ui/Arrow';
import { Input } from '@/shared/ui/Input';
import { maxTodoLength } from '../../model/consts/todosManager';

interface AddTodoProps {
	className?: string;
	addNewTodo: (todoText: string) => void;
}

export const AddTodo = memo((props: AddTodoProps) => {
	const { className, addNewTodo } = props;
	const [newTodo, setNewTodo] = useState<string>('');
	const [isLengthLimited, setIsLengthLimited] = useState<boolean>(false);

	const onChangeNewTodo = useCallback((value: string) => {
		setNewTodo(value);
	}, []);

	const addNewTodoAndClean = useCallback(() => {
		if (newTodo.length > maxTodoLength) {
			setIsLengthLimited(true);
		} else {
			addNewTodo(newTodo);
			setNewTodo('');
			setIsLengthLimited(false);
		}
	}, [addNewTodo, newTodo]);

	return (
		<HStack className={classNames(cls.addTodo, {}, [className])} align='center'>
			<Button variant='clear' onClick={addNewTodoAndClean}>
				<Arrow size='x' course='bottom' />
			</Button>
			<VStack max gap='8'>
				<Input
					onChange={onChangeNewTodo}
					value={newTodo}
					size='x'
					placeholder='What needs to be done?'
					className={cls.addTodoInput}
				/>
				{isLengthLimited && (
					<div className={cls.error}>
						Превышено допустимое количество символов - {maxTodoLength}
					</div>
				)}
			</VStack>
		</HStack>
	);
});

/* 		"react": "^18.3.1",
		"react-dom": "^18.3.1",
		"react-router-dom": "^6.23.1" */
