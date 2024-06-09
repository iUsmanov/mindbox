import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '@/shared/ui/Stack';
import { typedMemo } from '@/shared/lib/helpers/typedMemo/typedMemo';
import { TestProps } from '@/shared/types/tests';

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

export interface TabsProps<T extends string> extends TestProps {
	className?: string;
	tabs: TabItem<T>[];
	value: T;
	onTabClick: (tab: TabItem<T>) => void;
	direction?: FlexDirection;
}

export const Tabs = typedMemo(<T extends string>(props: TabsProps<T>) => {
	const {
		className,
		tabs,
		onTabClick,
		value,
		['data-testid']: dataTestId = 'Tabs',
		direction = 'row',
	} = props;

	const onClick = useCallback(
		(tab: TabItem<T>) => () => {
			onTabClick(tab);
		},
		[onTabClick]
	);

	return (
		<Flex
			direction={direction}
			gap='8'
			className={classNames('', {}, [className])}
			data-testid={dataTestId}
		>
			{tabs.map((tab) => {
				const isSelected = tab.value === value;
				return (
					<div
						key={tab.value}
						className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
						onClick={onClick(tab)}
					>
						{tab.content}
					</div>
				);
			})}
		</Flex>
	);
});
