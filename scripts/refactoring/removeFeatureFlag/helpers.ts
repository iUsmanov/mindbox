import { Node, SyntaxKind } from 'ts-morph';

export function getFirstJsxDescendant(node: Node) {
	const JsxElement = node?.getFirstDescendantByKind(SyntaxKind.JsxElement);
	if (JsxElement) {
		return JsxElement;
	}

	const JsxFragment = node?.getFirstDescendantByKind(SyntaxKind.JsxFragment);
	if (JsxFragment) {
		return JsxFragment;
	}

	const JsxSelfClosingElement = node?.getFirstDescendantByKind(SyntaxKind.JsxSelfClosingElement);
	if (JsxSelfClosingElement) {
		return JsxSelfClosingElement;
	}
}
