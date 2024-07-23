#include <stdio.h>
#include <stdlib.h>
int binarySearch(int array[], int x, int low, int high) {
if (high >= low) {
int mid = low + (high - low) / 2;
// If found at mid, then return it
if (array[mid] == x)
return mid;
// Search the left half
if (array[mid] > x)
return binarySearch(array, x, low, mid - 1);
// Search the right half
return binarySearch(array, x, mid + 1, high);
}
return -1;
}
void bubble(int a[],int s)
{
int i,j;
int temp;
for(i=1;i<s;i++)
{
for(j=0;j<s-i;j++)
{
if(a[j]>a[j+1])
{
temp=a[j];
a[j]=a[j+1];
a[j+1]=temp;
}
}
}
}

int main(void) {
int n,i,x,result;
int *numbers;
clrscr();
printf("enter numberof elements:");
scanf("%d", &n);
numbers = malloc(n * sizeof(*numbers));
for (i=0; i<n; i++)
{
printf("enter element %d:", i+1);
scanf("%d", &numbers[i]);
}
// sort the array using bubble sort
bubble(numbers,n);
printf("");
printf("enter element to be searched:");
scanf("%d", &x);
result = binarySearch(numbers, x, 0, n - 1);
if (result == -1)
printf("Not found");
else
printf("Element is found at index %d", result+1);
getch();
return 0;
}