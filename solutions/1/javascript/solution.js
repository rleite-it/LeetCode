// Should return indices of the two numbers such that they add up to target.

// Old version - the problem is that, this solution has a complexity of O(n^2)
/* const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		let aux = target - nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] === aux) return [i, j];
		}
	}
}; */

// Better version - with a complexity of O(n)
const twoSum = (nums, target) => {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		let requiredNum = target - nums[i];
		if (map.has(requiredNum)) return [map.get(requiredNum), i];
		map.set(nums[i], i);
	}
};
