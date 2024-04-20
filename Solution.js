
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    return allNodeValuesAreTheSame(root, root.val);
};

/**
 * @param {TreeNode} node
 * @param {number} previousValue
 * @return {boolean}
 */
function allNodeValuesAreTheSame(node, previousValue) {
    if (node === null) {
        return true;
    }
    if (node.val !== previousValue) {
        return false;
    }
    return allNodeValuesAreTheSame(node.left, node.val) && allNodeValuesAreTheSame(node.right, node.val);
}

/*
 Function TreeNode is in-built in the solution file on leetcode.com. 
 When running the code on the website, do not include this function.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
