import { memo } from 'react';
import cls from './Task.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Tick } from '@/shared/ui/Tick';
import { Todo } from '../../model/types/todosManager';

interface TaskProps {
	className?: string;
	todo: Todo;
	onToggleTodoComplete: (id: string) => void;
}

export const Task = memo((props: TaskProps) => {
	const { className, todo, onToggleTodoComplete } = props;
	return (
		<HStack
			className={classNames(cls.todo, { [cls.isCompleted]: todo.isCompleted }, [className])}
			align='center'
		>
			<Button
				variant='clear'
				className={cls.todoState}
				onClick={() => onToggleTodoComplete(todo.id)}
			>
				{todo.isCompleted && <Tick size='x' />}
			</Button>
			<div className={cls.todoText}>{todo.text}</div>
		</HStack>
	);
});
