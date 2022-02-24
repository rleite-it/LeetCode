// Find the length of the longest substring without repeating characters

const lengthOfLongestSubstring = (s) => {
	let i = 0,
		j = 0,
		max = 0;
	let aux = new Set();

	while (j < s.length) {
		if (!aux.has(s.charAt(j))) {
			aux.add(s.charAt(j));
			j++;
			max = Math.max(max, aux.size);
		} else {
			aux.delete(s.charAt(i));
			i++;
		}
	}

	return max;
};
