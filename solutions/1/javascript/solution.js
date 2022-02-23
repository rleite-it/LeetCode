// Should return indices of the two numbers such that they add up to target.
const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		let aux = target - nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] === aux) return [i, j];
		}
	}
};
