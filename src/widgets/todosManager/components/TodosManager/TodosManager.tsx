import { ChangeEventHandler, memo, useCallback, useState } from 'react';
import cls from './TodosManager.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Arrow } from '@/shared/ui/Arrow';
import { Input } from '@/shared/ui/Input';
import { Tick } from '@/shared/ui/Tick';

interface TodosManagerProps {
	className?: string;
}

export const TodosManager = memo((props: TodosManagerProps) => {
	const { className } = props;
	const [newTodo, setNewTodo] = useState<string>('');

	const onChangeNewTodo = useCallback((value: string) => {
		setNewTodo(value);
	}, []);

	return (
		<div className={classNames(cls.todosManager, {}, [className])}>
			<div className={cls.title}>todos</div>
			<div className={cls.todosPanel}>
				<HStack className={cls.addTodo} align='center'>
					<Button variant='clear'>
						<Arrow size='x' course='bottom' />
						<Input
							onChange={onChangeNewTodo}
							value={newTodo}
							size='x'
							placeholder='What needs to be done?'
							className={cls.addTodoInput}
						/>
					</Button>
				</HStack>

				<HStack className={cls.todo} align='center'>
					<Button variant='clear' className={cls.todoState}>
						<Tick size='x' />
					</Button>
					<div className={cls.todoText}>Покормить кота</div>
				</HStack>
				<div className={cls.menu}></div>
				{/* ========= */}
				{/* ========= */}
				<div className={cls.firstShadow}></div>
				<div className={cls.secondShadow}></div>
			</div>
		</div>
	);
});
