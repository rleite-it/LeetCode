const reverse = (n) => {
	let reverseN = +String(Math.abs(n)).split("").reverse().join("");

	if (reverseN > 0x7fffffff) return 0;

	return n < 0 ? -reverseN : reverseN;
};
