
function isUnivalTree(root: TreeNode | null): boolean {
    return allNodeValuesAreTheSame(root, root.val);
};

function allNodeValuesAreTheSame(node: TreeNode, previousValue: number): boolean {
    if (node === null) {
        return true;
    }
    if (node.val !== previousValue) {
        return false;
    }
    return allNodeValuesAreTheSame(node.left, node.val) && allNodeValuesAreTheSame(node.right, node.val);
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
