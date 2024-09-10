#include <stdio.h>
#define size 5
int stack[size];
int top = -1;
int push(){
    if(top == size - 1){
        printf("Stack overflow \n");
    }else{
        int x;
        printf("Enter a element to push: ");
        scanf("%d", &x);
        top ++;
        stack[top] = x;
    }
}
int pop(){
    if(top == -1){
        printf("Stack underflow");
    }else{
        top --;
    }
}
int display(){
    if(top == -1){
        printf("Stack is empty to traverse");
    }else{
            for(int i = 0; i<=top; i++){
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
    
}
int main(){
    while(1){
        int choice;
        printf("Enter any choice: ");
        scanf("%d", &choice);
        switch(choice){
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            default:
                printf("Wrong choice entered please correct");
        }
    }
    return 0;
}