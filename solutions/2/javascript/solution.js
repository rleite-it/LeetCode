// Should add the two numbers and return the sum as a linked list

// Definition for singly-linked list.
/* function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
} */

const addTwoNumbers = (l1, l2) => {
	let carry = 0;
	let head = new ListNode();
	let curr = head;

	while (l1 || l2) {
		let x = l1 !== null ? l1.val : 0;
		let y = l2 !== null ? l2.val : 0;

		let sum = x + y + carry;
		carry = Math.floor(sum / 10);
		curr.next = new ListNode(sum % 10);

		if (l1 !== null) l1 = l1.next;
		if (l2 !== null) l2 = l2.next;

		curr = curr.next;
	}

	if (carry) curr.next = new ListNode(carry);

	return head.next;
};
