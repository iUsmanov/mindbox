import { memo } from 'react';
import cls from './Arrow.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArrowProps {
	className?: string;
	course: 'left' | 'right' | 'top' | 'bottom';
	size: 's' | 'l' | 'm' | 'x';
}

export const Arrow = memo((props: ArrowProps) => {
	const { className, course, size } = props;
	return (
		<div className={classNames(cls.arrow, {}, [className])}>
			<div className={classNames(cls.obj, {}, [cls[course], cls[`size-${size}`]])}></div>
		</div>
	);
});
