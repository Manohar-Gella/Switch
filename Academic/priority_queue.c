#include <stdio.h>
#include <stdlib.h>

#define MAX 100

int heap[MAX];
int size = 0;

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void heapify_up(int index) {
    if (index > 0) {
        int parent = (index - 1) / 2;
        if (heap[parent] < heap[index]) {
            swap(&heap[parent], &heap[index]);
            heapify_up(parent);
        }
    }
}

void heapify_down(int index) {
    int largest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < size && heap[left] > heap[largest])
        largest = left;

    if (right < size && heap[right] > heap[largest])
        largest = right;

    if (largest != index) {
        swap(&heap[index], &heap[largest]);
        heapify_down(largest);
    }
}

void insert(int value) {
    heap[size] = value;
    size++;
    heapify_up(size - 1);
}

int extract_max() {
    if (size == 0)
        return -1;

    int max = heap[0];
    heap[0] = heap[size - 1];
    size--;
    heapify_down(0);
    return max;
}

int main() {
    insert(10);
    insert(30);
    insert(20);
    insert(5);
    insert(1);

    printf("Max: %d\n", extract_max());
    printf("Max: %d\n", extract_max());
    printf("Max: %d\n", extract_max());

    return 0;
}
