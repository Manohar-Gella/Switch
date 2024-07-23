#include <stdio.h>
#define SIZE 10
void push(int);
void pop();
void display();
int stack[SIZE], top = -1;
void main()
{
int value, choice;
clrscr();
while(1){
printf("***** MENU *****");
printf("1. Push \n 2. Pop \n 3. Display \n 4. Exit");
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
void push(int value)
{
if(top == SIZE-1)
printf("Stack is Full!!! Insertion is not possible!!!");
else
{
top++;
stack[top] = value;
printf("Insertion success!!!");
}
}
void pop()
{
if(top == -1)
printf("Stack is Empty!!! Deletion is not possible!!!");
else
{
printf("Deleted : %d", stack[top]);
top--;
} }
