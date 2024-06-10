import { memo } from 'react';
import cls from './Menu.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Button } from '@/shared/ui/Button';
import { TodosSort } from '../../model/types/todosManager';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MenuProps {
	className?: string;
	todosSort: TodosSort;
	leftTodosQuantity: number;
	onChangeTodosSort: (tab: TabItem<TodosSort>) => void;
	onClearCompleted: () => void;
}

const tabs: TabItem<TodosSort>[] = [
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

export const Menu = memo((props: MenuProps) => {
	const { className, todosSort, onChangeTodosSort, leftTodosQuantity, onClearCompleted } = props;

	return (
		<HStack className={classNames(cls.menu, {}, [className])} justify='between' align='center'>
			<div>{leftTodosQuantity} items left</div>
			<Tabs tabs={tabs} value={todosSort} onTabClick={onChangeTodosSort} />
			<Button variant='clear' className={cls.clearButton} onClick={onClearCompleted}>
				Clear completed
			</Button>
		</HStack>
	);
});
