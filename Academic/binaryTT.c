#include <stdio.h>
#include <stdlib.h>
typedef struct node {
 int key;
 struct node *left, *right;
} node;
// Create a node
node *newNode(int item) {
 node *temp = (node *)malloc(sizeof(node));
 temp->key = item;
 temp->left = temp->right = NULL;
 return temp;
}
// Insert a node
node *insert(node *node, int key) {
 // Return a new node if the tree is empty
 if (node == NULL) return newNode(key);
 // Traverse to the right place and insert the node
 if (key < node->key)
 node->left = insert(node->left, key);
 else
 node->right = insert(node->right, key);
 return node;
}
// Inorder Traversal
void inorder(node *root) {
 if (root != NULL) {
 // Traverse left
 inorder(root->left);
 // Traverse root
 printf("%d -> ", root->key);
 // Traverse right
 inorder(root->right);
 }
}
// Preorder Traversal
void preorder(node *root) {
 if (root != NULL) {
 // Traverse root
 printf("%d -> ", root->key);
 // Traverse left
 preorder(root->left);
 // Traverse right
 preorder(root->right);
 }
}
// Postorder Traversal
void postorder(node *root) {
 if (root != NULL) {
// Traverse left
 postorder(root->left);
 // Traverse right
 postorder(root->right);
 // Traverse root
 printf("%d -> ", root->key);
 }
}
// Driver code
int main() {
 node *root = NULL;
int value, choice;
clrscr();
 root = insert(root, 38);
 root = insert(root, 5);
 root = insert(root, 45);
 root = insert(root, 1);
 root = insert(root, 9);
 root = insert(root, 47);
 root = insert(root, 8);
 root = insert(root, 15);
 root = insert(root, 46);
 root = insert(root, 13);
printf("\n\n***** MENU *****\n");
printf("1. Inorder\n2. Preorder\n3. Postorder\n4. Exit");
printf("\nEnter your choice: \n");
scanf("%d",&choice);
printf("\Tree elements: \n – 38,5,45,1,9,47,8,15,46,13");
switch(choice){
case 1:
 printf("Inorder traversal: ");
 inorder(root);
 break;
case 2:
 printf("Preorder traversal: ");
 preorder(root);
 break;
case 3:
 printf("Postorder traversal: ");
 postorder(root);
 break;
case 4: exit(0);
default: printf("\nWrong selection!!! Try again!!!");
}
getch();
return 0;
}