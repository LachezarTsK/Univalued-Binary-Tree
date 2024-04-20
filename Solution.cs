
using System;

public class Solution
{
    public bool IsUnivalTree(TreeNode root)
    {
        return allNodeValuesAreTheSame(root, root.val);
    }

    private bool allNodeValuesAreTheSame(TreeNode node, int previousValue)
    {
        if (node == null)
        {
            return true;
        }
        if (node.val != previousValue)
        {
            return false;
        }
        return allNodeValuesAreTheSame(node.left, node.val) && allNodeValuesAreTheSame(node.right, node.val);
    }
}

/*
Class TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this class.
 */
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
