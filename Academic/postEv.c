#include <stdio.h>
#include <ctype.h>

int stack[20];
int top = -1;

void push(int x) {
    stack[++top] = x;
}

int pop() {
    return stack[top--];
}

int main() {
    char exp[20];
    char *e;
    int n1, n2, n3, num;

    printf("Enter the expression: ");
    scanf("%s", exp);
    e = exp;

    while (*e != '\0') {
        if (isdigit(*e)) {
            num = *e - '0'; // Convert char to int
            push(num);
        } else {
            n1 = pop();
            n2 = pop();
            switch (*e) {
                case '+':
                    n3 = n2 + n1;
                    break;
                case '-':
                    n3 = n2 - n1;
                    break;
                case '*':
                    n3 = n2 * n1;
                    break;
                case '/':
                    n3 = n2 / n1;
                    break;
                default:
                    printf("Invalid operator encountered: %c\n", *e);
                    return -1;
            }
            push(n3);
        }
        e++;
    }

    printf("\nThe result of the expression %s = %d\n\n", exp, pop());

    return 0;
}
