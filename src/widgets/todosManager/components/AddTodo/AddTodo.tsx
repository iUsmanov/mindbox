import { memo, useCallback, useState } from 'react';
import cls from './AddTodo.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Arrow } from '@/shared/ui/Arrow';
import { Input } from '@/shared/ui/Input';

interface AddTodoProps {
	className?: string;
}

export const AddTodo = memo((props: AddTodoProps) => {
	const { className } = props;
	const [newTodo, setNewTodo] = useState<string>('');

	const onChangeNewTodo = useCallback((value: string) => {
		setNewTodo(value);
	}, []);

	return (
		<HStack className={cls.addTodo} align='center'>
			<Button variant='clear'>
				<Arrow size='x' course='bottom' />
			</Button>
			<Input
				onChange={onChangeNewTodo}
				value={newTodo}
				size='x'
				placeholder='What needs to be done?'
				className={cls.addTodoInput}
			/>
		</HStack>
	);
});
