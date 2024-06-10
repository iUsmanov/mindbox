import { memo, useCallback, useState } from 'react';
import cls from './Menu.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { Button } from '@/shared/ui/Button';
import { TodosSort } from '../../model/types/todosManager';

interface MenuProps {
	className?: string;
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
	const { className } = props;
	const [todosSort, setTodosSort] = useState<TodosSort>('all');

	const onChangeTodosSort = useCallback((tab: TabItem<TodosSort>) => {
		setTodosSort(tab.value);
	}, []);

	return (
		<HStack className={cls.menu} justify='between' align='center'>
			<div>9 items left</div>
			<Tabs tabs={tabs} value={todosSort} onTabClick={onChangeTodosSort} />
			<Button variant='clear' className={cls.clearButton}>
				Clear completed
			</Button>
		</HStack>
	);
});
