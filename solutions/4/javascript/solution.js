// Should return the median of two sorted arrays

// Old Solution
/* const findMedianSortedArrays = (nums1, nums2) => {
	let arr = [...nums1, ...nums2].sort((a, b) => a - b);

	if (!(arr.length % 2))
		return (
			(arr[Math.floor(arr.length / 2)] +
				arr[Math.floor((arr.length - 1) / 2)]) /
			2
		);
	else return arr[Math.floor(arr.length / 2)];
}; */

// Improved Solution
const findMedianSortedArrays = (nums1, nums2) => {
	let i = 0,
		j = 0;
	let arr = [];

	while (i < nums1.length || j < nums2.length) {
		if (nums1[i] > nums2[j] || i >= nums1.length) {
			arr.push(nums2[j]);
			j++;
		} else {
			arr.push(nums1[i]);
			i++;
		}
	}

	if (!(arr.length % 2)) {
		return (
			(arr[Math.floor((arr.length - 1) / 2)] +
				arr[Math.floor(arr.length / 2)]) /
			2
		);
	} else {
		return arr[Math.floor(arr.length / 2)];
	}
};
