// stack implementation of array
#include<stdio.h>
#define SIZE 5
int stack[SIZE];
int top = -1;

int display(){
    for(int i = 0; i<=top; i++){
        printf("%d ", stack[i]);
    }
}

int push(){
    int temp;
    printf("\nEnter which element to push: ");
    scanf("%d", &temp);
    top ++;
    stack[top] = temp;
    printf("Element %d sucecessfully inserted", temp);
}

int pop(){
    printf("last element sucessfully removed");
    top --;
}


int main(){
    while(1){
        int choice;
        printf("\n Enter any choice \n");
        printf("1.Display\n2.Push\n3.Pop\n:");
        scanf("%d", &choice);
        switch(choice){
            case 1:
                if(top != -1){
                    display();
                }else{
                    printf("\nStack is empty to display");
                }
                break;
            case 2:
                if(top>=SIZE-1){
                    printf("\nStack is full push elements ");
                }else{
                    push();
                }
                break;
            case 3:
                if(top == -1){
                    printf("The stack is empty to pop elements");
                }else{
                    pop();
                }
                break;
            default:
                printf("Something went wrong");
                break;
    }
    }
    return 0;
}