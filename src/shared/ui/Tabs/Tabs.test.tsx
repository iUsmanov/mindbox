// import { screen } from '@testing-library/react';
// import { mockTabs } from './mocks';
// import { TabItem, Tabs } from './Tabs';
// import { act } from 'react-dom/test-utils';
// import { userEvent } from '@testing-library/user-event';

// const onTabClick = jest.fn();

// describe('Tabs.test', () => {
// 	test('Component is rendered', async () => {
// 		await act(async () =>
// 			componentRender(<Tabs tabs={mockTabs} value='Tab 1' onTabClick={onTabClick} />)
// 		);

// 		expect(screen.getByTestId('Tabs')).toBeInTheDocument();
// 		expect(screen.getByText('Tab 1')).toHaveClass('selected light');
// 		mockTabs.forEach((tab) => {
// 			const tabElement = screen.getByText(tab.content);
// 			expect(tabElement).toBeInTheDocument();
// 		});
// 	});

// 	test('Click on one of tabs', async () => {
// 		await act(async () =>
// 			componentRender(<Tabs tabs={mockTabs} value='Tab 1' onTabClick={onTabClick} />)
// 		);

// 		await userEvent.click(screen.getByText('Tab 2'));

// 		expect(onTabClick).toHaveBeenCalled();
// 	});

// 	test('Value is changed by click on one of tabs', async () => {
// 		// Несмотря на то, что значение переменной value меняется при клике,
// 		// обновлённое значение не попадает в компонент.
// 		let value = 'Tab 1';
// 		const setValue = jest.fn(<T extends string>(tab: TabItem<T>) => {
// 			value = tab.value;
// 		});

// 		await act(async () =>
// 			componentRender(<Tabs tabs={mockTabs} value={value} onTabClick={setValue} />)
// 		);

// 		await userEvent.click(screen.getByText('Tab 2'));

// 		expect(setValue).toHaveBeenCalled();
// 		expect(value).toBe('Tab 2');
// 	});
// });
