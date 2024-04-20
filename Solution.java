
public class Solution {

    public boolean isUnivalTree(TreeNode root) {
        return allNodeValuesAreTheSame(root, root.val);
    }

    private boolean allNodeValuesAreTheSame(TreeNode node, int previousValue) {
        if (node == null) {
            return true;
        }
        if (node.val != previousValue) {
            return false;
        }
        return allNodeValuesAreTheSame(node.left, node.val) && allNodeValuesAreTheSame(node.right, node.val);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
class TreeNode {

    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {
    }

    TreeNode(int val) {
        this.val = val;
    }

    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
