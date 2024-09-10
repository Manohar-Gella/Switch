#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int queue[SIZE];
int front = -1;
int rear = -1;

void push() {
    int x;
    if ((front == 0 && rear == SIZE - 1) || (rear == (front - 1) % (SIZE - 1))) {
        printf("Queue overflow\n");
    } else {
        printf("Enter the element to push: ");
        scanf("%d", &x);
        if (front == -1) {
            front = rear = 0;
        } else if (rear == SIZE - 1 && front != 0) {
            rear = 0;
        } else {
            rear++;
        }
        queue[rear] = x;
    }
}

void pop() {
    if (front == -1) {
        printf("Queue underflow\n");
    } else {
        printf("Popped element: %d\n", queue[front]);
        if (front == rear) {
            front = rear = -1;
        } else if (front == SIZE - 1) {
            front = 0;
        } else {
            front++;
        }
    }
}

void display() {
    if (front == -1) {
        printf("Queue is empty\n");
    } else {
        int i = front;
        printf("Queue elements: ");
        if (rear >= front) {
            while (i <= rear) {
                printf("%d ", queue[i++]);
            }
        } else {
            while (i < SIZE) {
                printf("%d ", queue[i++]);
            }
            i = 0;
            while (i <= rear) {
                printf("%d ", queue[i++]);
            }
        }
        printf("\n");
    }
}

int main() {
    int choice;
    while (1) {
        printf("\n1. Push\n2. Pop\n3. Display\n4. Exit\nEnter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                display();
                break;
            case 4:
                exit(0);
            default:
                printf("Invalid choice\n");
        }
    }
    return 0;
}
