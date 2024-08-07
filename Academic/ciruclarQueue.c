#include <stdio.h>
#include <stdlib.h>

#define SIZE 5

int items[SIZE];
int front = -1, rear = -1;

// Check if the queue is full
int isFull() {
    if ((front == rear + 1) || (front == 0 && rear == SIZE - 1)) return 1;
    return 0;
}

// Check if the queue is empty
int isEmpty() {
    if (front == -1) return 1;
    return 0;
}

// Adding an element
void enQueue(int element) {
    if (isFull()) {
        printf("\nQueue is full!!\n");
    } else {
        if (front == -1) front = 0;
        rear = (rear + 1) % SIZE;
        items[rear] = element;
        printf("\nInserted -> %d", element);
    }
}

// Removing an element
int deQueue() {
    int element;
    if (isEmpty()) {
        printf("\nQueue is empty!!\n");
        return -1;
    } else {
        element = items[front];
        if (front == rear) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % SIZE;
        }
        printf("\nDeleted element -> %d\n", element);
        return element;
    }
}

// Display the queue
void display() {
    int i;
    if (isEmpty()) {
        printf("\nEmpty Queue\n");
    } else {
        printf("\nFront -> %d", front);
        printf("\nItems -> ");
        for (i = front; i != rear; i = (i + 1) % SIZE) {
            printf("%d ", items[i]);
        }
        printf("%d ", items[i]);
        printf("\nRear -> %d\n", rear);
    }
}

int main() {
    int choice, item;

    while (1) {
        printf("\n\n1. Enqueue\n2. Dequeue\n3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Input the element to add in queue: ");
                scanf("%d", &item);
                enQueue(item);
                break;
            case 2:
                deQueue();
                break;
            case 3:
                exit(0);
            default:
                printf("\nWrong choice\n");
                break;
        }
        printf("\nfront = %d, rear = %d\n", front, rear);
        display();
    }

    return 0;
}
