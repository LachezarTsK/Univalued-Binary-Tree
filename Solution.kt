
class Solution {
    fun isUnivalTree(root: TreeNode?): Boolean {
        return allNodeValuesAreTheSame(root!!, root.`val`)
    }

    private fun allNodeValuesAreTheSame(node: TreeNode?, previousValue: Int): Boolean {
        if (node === null) {
            return true
        }
        if (node.`val` != previousValue) {
            return false
        }
        return allNodeValuesAreTheSame(node.left, node.`val`) && allNodeValuesAreTheSame(node.right, node.`val`)
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com.
When running the code on the website, do not include this class.
 */
class TreeNode(var `val`: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}
