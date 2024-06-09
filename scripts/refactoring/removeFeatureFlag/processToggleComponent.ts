import { Node, SyntaxKind } from 'ts-morph';
import { getFirstJsxDescendant } from './helpers';

export function processToggleComponent(node: Node, removeFeatureName: string, stateToggle: string) {
	const attributes = node.getFirstChildByKind(SyntaxKind.JsxAttributes);

	let cancel: boolean = false;

	attributes?.forEachChild((attribute) => {
		const attributeName = attribute.getFirstChild()?.getText();
		if (attributeName !== 'name') return;
		const attributeValue = attribute.getLastChild();

		let featureName = attributeValue?.getText();

		if (featureName?.startsWith('{')) {
			featureName = featureName.slice(2, -2);
		} else {
			featureName = featureName?.slice(1, -1);
		}

		if (featureName !== removeFeatureName) {
			cancel = true;
		}
	});

	if (cancel) return;

	let replaceExpression;

	attributes?.forEachChild((attribute) => {
		const attributeName = attribute.getFirstChild()?.getText();
		if (attributeName !== stateToggle) return;

		const attributeValue = attribute.getLastChild();
		let attributeValueText = attributeValue?.getText();

		if (attributeValue && getFirstJsxDescendant(attributeValue)) {
			if (!attributeValue?.getFirstChildByKind(SyntaxKind.BinaryExpression)) {
				attributeValueText = attributeValueText?.slice(1, -1);
				if (attributeValueText?.startsWith('(')) {
					attributeValueText = attributeValueText.slice(1, -1);
				}
			} else {
				attributeValueText = `<>${attributeValueText}</>`;
			}
		}

		replaceExpression = attributeValueText;
	});

	node.replaceWithText(replaceExpression ?? '<>DELETE ME!</>');
}
