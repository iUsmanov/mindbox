export function processError(removeFeatureName: string, stateToggle: string) {
	if (!removeFeatureName) {
		throw new Error('Укажите фичу-флаг!');
	}

	if (!stateToggle) {
		throw new Error('Укажите состояние, в которое вы хотите переключить фича-флаг!');
	}

	if (stateToggle !== 'on' && stateToggle !== 'off') {
		throw new Error('Указано некорректное состояние фича-флага!');
	}
}
