Array.prototype.deleteByIndex = function (index: number) {
	return this.slice(0, index).concat(this.slice(index + 1));
};
