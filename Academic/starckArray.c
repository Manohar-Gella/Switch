#include <stdio.h>
#define SIZE 5
int stack[SIZE];
int top = -1;

int display(){
    if(top == -1){
        printf("Stack is empty bro\n");
    }
    else{
            for(int i = 0; i<=top; i++){
            printf("%d ", stack[i]);
        }
    }
    
}

int push(){
    int value;
    printf("Enter the value to push: ");
    scanf("%d", &value);
    top++;
    stack[top] = value;
}

int pop(){
    if(top < 0){
        printf("Stack is empty\n");
    }
    else{
        printf("value sucessfully removed\n");
        top --;
    }
}

int main() {
    while(1){
        int choice;
        printf("Enter any choice");
        printf("\n1.Display\n2.Push\n3.Pop\n:");
        scanf("%d", &choice);
        switch(choice){
            case 1:
                display();
                break;
            case 2:
                if(top >= SIZE - 1){
                    printf("Stack is full\n");
                }
                else{
                    push();
                }
                break;
            case 3:
                pop();
                break;
            default:
                printf("Something went wrong");
        }
        
    }
}