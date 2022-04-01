const convert = (s, numRows) => {
	if (numRows == 1) return s;

	let rows = new Array(numRows);
	rows.fill("");

	let increment = 1;
	let rowIndex = 0;
	for (let i = 0; i < s.length; ++i) {
		rows[rowIndex] += s.charAt(i);

		if (rowIndex == numRows - 1) {
			increment = -1;
		} else if (rowIndex == 0) {
			increment = 1;
		}

		rowIndex += increment;
	}
	return "".concat(...rows);
};
