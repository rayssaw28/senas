# ImproperExceptionHandling

A classe Calculator executa uma operação matemática e lida com sua exceção, e isso deveria ser separado. Quebra o **princípio da responsabilidade única** (S)

```java

public class NoProperExceptionHandling {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();
        ExceptionHandler exceptionHandler = new ExceptionHandler();

        try {
            int result = calculator.divide(10, 0);
            System.out.println("Result: " + result);
        } catch (Exception e) {
            exceptionHandler.handle(e);
        }
    }
}   

class Calculator {
    public int divide(int a, int b) {
        return a / b; 
    }
}

class ExceptionHandler {
    public void handle(Exception e) {
        System.out.println("Error: " + e.getMessage());
    }
}
