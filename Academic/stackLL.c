#include<stdlib.h>
typedef struct cell {
int val;
struct cell *next;
}cell;
cell *head=NULL;
void push(int);
int pop();
void display();
void main()
{
int value, choice;
clrscr();
while(1){
printf("***** MENU *****");
printf("1. Push \n2. Pop\n3. Display\n4. Exit");
printf("Enter your choice: ");
scanf("%d", &choice);
switch(choice)
{
case 1: printf("Enter the value to be inserted: ");
scanf("%d",&value);
push(value);
break;
case 2: pop();
break;
case 3: display();
break;
case 4: exit(0);
default: printf("Wrong selection!!! Try again!!!");
}
}
}
void push(int s)
{
cell *newCell = (cell*) malloc(sizeof(cell)); // Allocate memory to a node
newCell->val = s; // insert the item
newCell->next = head;
head = newCell; // move head to new node
printf("%d inserted", s);
}
int pop()
{
int top;
cell *old;
if (head==NULL)
printf("pop empty stack error ");
top = head->val;
old =head;
head = head->next;
free(old);
printf("%d popped", top);
return top;
}
void display()
{
if(head == NULL)
printf("Stack is Empty!!!");
else
{
cell *temp = (cell*) malloc(sizeof(cell));
temp=head;
while(temp->next != NULL)
{
printf("%d ", temp->val);
temp = temp -> next;
}
printf("%d", temp->val);
}
}