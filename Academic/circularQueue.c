#include <stdio.h>
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
 if (isFull())
 printf("\n Queue is full!! \n");
 else {
 if (front == -1) front = 0;
 rear = (rear + 1) % SIZE;
 items[rear] = element;
 printf("\n Inserted -> %d", element);
 }
}
int deQueue() {
 int element;
 if (isEmpty()) {
 printf("\n Queue is empty !! \n");
 return (-1);
 } else {
 element = items[front];
 if (front == rear) {
 front = -1;
 rear = -1;
 }
 // Queuehas only one element, so we reset the queue after dequeing it.
 else {
 front = (front + 1) % SIZE;
 }
 printf("\n Deleted element -> %d \n", element);
 return (element);
 }
}
// Display the queue
void display() {
 int i;
 if (isEmpty())
 printf(" \n Empty Queue\n");
 else {
 printf("\n Front -> %d ", front);
 printf("\n Items -> ");
 for (i = front; i != rear; i = (i + 1) % SIZE) {
 printf("%d ", items[i]);
 }
 printf("%d ", items[i]);
 printf("\n Rear -> %d \n", rear);
 }
}
int main() {
int choice,item;
 clrscr();
while(1){
    printf("\n\n1.Enqueue\n 2.Dequeue\n 3.Exit\n ");
    printf("\nEnter your choice :\n");
    scanf("%d",&choice);
    switch(choice){
    case 1:
    printf("\nInput the element for adding in queue : ");
    scanf("%d",&item);
    enQueue(item);
    break;
    case 2:
    deQueue(item);
    break;
    case 3:
    exit(1);
    default:
    printf("\nWrong choice\n");
    printf("\nfront = %d, rear =%d\n", front , rear);
    display(); 
    }
}