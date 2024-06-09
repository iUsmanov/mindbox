import { Node, SyntaxKind } from 'ts-morph';

export function processToggleFunction(node: Node, removeFeatureName: string, stateToggle: string) {
	const objectOptions = node.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
	if (!objectOptions) return;

	const featureNameProperty = objectOptions.getProperty('name');
	const replaceProperty = objectOptions.getProperty(stateToggle);

	const featureName = featureNameProperty
		?.getFirstChildByKind(SyntaxKind.StringLiteral)
		?.getLiteralValue();

	if (featureName !== removeFeatureName) return;

	if (!replaceProperty) {
		return node.replaceWithText("'DELETE ME!'");
	}

	const replaceFunction = replaceProperty?.getFirstChildByKind(SyntaxKind.ArrowFunction);
	const arrowFunctionBody = replaceFunction?.getChildAtIndex(4);

	node.replaceWithText(arrowFunctionBody?.getText() ?? '');
}
