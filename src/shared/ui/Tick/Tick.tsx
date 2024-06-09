import { memo } from 'react';
import cls from './Tick.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface TickProps {
	className?: string;
	size: 's' | 'l' | 'm' | 'x';
}

export const Tick = memo((props: TickProps) => {
	const { className, size } = props;
	return (
		<div className={classNames(cls.tick, {}, [className])}>
			<div className={classNames(cls.obj, {}, [cls[`size-${size}`]])}></div>
		</div>
	);
});
