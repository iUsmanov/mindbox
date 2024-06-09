// import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Mods, classNames } from './classNames';

describe('classNames.test', () => {
	test('With all parameters', () => {
		const mods: Mods = {
			hovered: true,
			readable: false,
			clickable: undefined,
		};
		const addtional: Array<string | undefined> = ['add1', 'add2', 'add3'];
		const classes = classNames('defaultCls', mods, addtional);
		expect(classes).toBe('defaultCls add1 add2 add3 hovered');
	});
	test('With only first parameter', () => {
		const classes = classNames('defaultCls');
		expect(classes).toBe('defaultCls');
	});
	test('With undefined mods', () => {
		const addtional: Array<string | undefined> = ['add1', 'add2', 'add3'];
		const classes = classNames('defaultCls', undefined, addtional);
		expect(classes).toBe('defaultCls add1 add2 add3');
	});
	test('With undefined additional', () => {
		const mods: Mods = {
			hovered: true,
			readable: false,
			clickable: undefined,
		};
		const classes = classNames('defaultCls', mods, undefined);
		expect(classes).toBe('defaultCls hovered');
	});
});
