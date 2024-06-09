// npm run remove-feature isProductRatingEnabled on
// Don't forget delete "console.log('DELETE ME!')" and '<DeleteMe />'

/**
 * Этот скрипт необходим для того, чтобы удалить старый или новый код во всём проекте.
 * Делается это с помощью хелпера `toggleFeatures` и компонента `ToggleFeatures`.
 * При запуске мы передаём первым аргументом - название фичи, а вторым - на какое
 * состояние мы переключаем данную фичу - `on` или `off`.
 * Вот так можно запустить этот скрипт - npm run remove-feature isProductRatingEnabled on
 *
 * Например, в одном из файлов у нас есть такой код:
 * `
 * toggleFeatures({
 * 	name: 'isCounterEnabled',
 * 	on: () => console.log('FEATURE isCounterEnabled is toggled ON'),
 * 	off: () => console.log('FEATURE isCounterEnabled is toggled OFF')
 * })
 *
 * <ToggleFeatures
 *		name='isCounterEnabled'
 *		on={<Counter />}
 *		off={<Card max>{t('Счётчик скоро появится!')}</Card>}
 *	/>
 *
 * `
 *
 * А теперь вот так запустим этот скрипт - npm run remove-feature isCounterEnabled on
 * После прогона этого скрипта от этого кода останется следующее:
 * `
 * console.log('FEATURE isCounterEnabled is toggled ON')
 *
 * <Counter />
 *
 * `
 *
 */

import { Project, SyntaxKind } from 'ts-morph';
import { processError } from './processError';
import { processToggleFunction } from './processToggleFunction';
import { processToggleComponent } from './processToggleComponent';

const project = new Project({});
const removeFeatureName = process.argv[2];
const stateToggle = process.argv[3];

processError(removeFeatureName, stateToggle);

// project.addSourceFilesAtPaths('src/pages/ProductDetailsPage/components/ProductDetailsPage.tsx');
project.addSourceFilesAtPaths('src/**/*.{ts,tsx}');
const sourceFiles = project.getSourceFiles();

sourceFiles.forEach((sourceFile) => {
	sourceFile.forEachDescendant((node) => {
		if (
			node.isKind(SyntaxKind.CallExpression) &&
			node.getExpression().getText() === 'toggleFeatures'
		) {
			processToggleFunction(node, removeFeatureName, stateToggle);
		} else if (
			node.isKind(SyntaxKind.JsxSelfClosingElement) &&
			node.getFirstChildByKind(SyntaxKind.Identifier)?.getText() === 'ToggleFeatures'
		) {
			processToggleComponent(node, removeFeatureName, stateToggle);
		}
	});
});

project.save();
