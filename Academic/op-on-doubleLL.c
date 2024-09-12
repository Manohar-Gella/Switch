#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* head = NULL;

void insertAtBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = head;
    if (head != NULL)
        head->prev = newNode;
    head = newNode;
}

void insertAtEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;
    if (head == NULL) {
        newNode->prev = NULL;
        head = newNode;
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL)
        temp = temp->next;
    temp->next = newNode;
    newNode->prev = temp;
}

void deleteNode(int value) {
    struct Node* temp = head;

    if (temp != NULL && temp->data == value) {
        head = temp->next;
        if (head != NULL)
            head->prev = NULL;
        free(temp);
        return;
    }

    while (temp != NULL && temp->data != value)
        temp = temp->next;

    if (temp == NULL)
        return;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    if (temp->prev != NULL)
        temp->prev->next = temp->next;

    free(temp);
}

void displayForward() {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

void displayBackward() {
    struct Node* temp = head;
    if (temp == NULL)
        return;

    while (temp->next != NULL)
        temp = temp->next;

    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->prev;
    }
    printf("NULL\n");
}

int main() {
    insertAtBeginning(10);
    insertAtBeginning(20);
    insertAtEnd(30);
    insertAtEnd(40);

    printf("Doubly Linked List (Forward): ");
    displayForward();

    printf("Doubly Linked List (Backward): ");
    displayBackward();

    deleteNode(20);
    printf("After Deleting 20 (Forward): ");
    displayForward();

    return 0;
}
