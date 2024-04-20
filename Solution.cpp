
using namespace std;

/*
Struct TreeNode is in-built in the solution file on leetcode.com. 
When running the code on the website, do not include this struct.
 */
struct TreeNode {
	int val;
	TreeNode* left;
	TreeNode* right;
	TreeNode() : val(0), left(nullptr), right(nullptr) {}
	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
	TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    bool isUnivalTree(TreeNode* root) const {
        return allNodeValuesAreTheSame(root, root->val);
    }

private:
    bool allNodeValuesAreTheSame(TreeNode* node, int previousValue) const {
        if (node == nullptr) {
            return true;
        }
        if (node->val != previousValue) {
            return false;
        }
        return allNodeValuesAreTheSame(node->left, node->val) && allNodeValuesAreTheSame(node->right, node->val);
    }
};
