import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

export interface ButtonBeautyProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	fullWidth?: boolean;
	addonLeft?: ReactNode;
	addonRight?: ReactNode;
	color?: ButtonColor;
}

export type ButtonVariant = 'outline' | 'clear' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';
export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

export const Button = memo((props: ButtonBeautyProps) => {
	const {
		className,
		children,
		variant = 'outline',
		square,
		size = 'size_m',
		fullWidth,
		addonLeft,
		addonRight,
		color = 'normal',
		...otherProps
	} = props;

	const mods: Mods = {
		[cls.square]: square,
		[cls.fullWidth]: fullWidth,
		[cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
	};
	return (
		<button
			{...otherProps}
			type='button'
			className={classNames(cls.button, mods, [className, cls[variant], cls[size], cls[color]])}
		>
			{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
			{children}
			{addonRight && <div className={cls.addonRight}>{addonRight}</div>}
		</button>
	);
});
