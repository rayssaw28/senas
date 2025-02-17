# InterfaceSegregationViolation

A classe interface Machine força qualquer implementação a incluir todos os métodos (print(), scan(), fax()), mesmo que nem todas as impressoras precisem ou tenham essas funcionalidades. Quebra o **princípio da Segregação de Interface** (I)

```java

public class InterfaceSegregation {
    public static void main(String[] args) {
        Printer printer = new BasicPrinter();
        printer.print();

        MultiFunctionPrinter multiPrinter = new MultiFunctionPrinter();
        multiPrinter.print();
        multiPrinter.scan();
        multiPrinter.fax();
    }
}

interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

interface FaxMachine {
    void fax();
}


class BasicPrinter implements Printer {
    public void print() {
        System.out.println("Printing...");
    }
}

class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
    public void print() {
        System.out.println("Printing...");
    }

    public void scan() {
        System.out.println("Scanning...");
    }

    public void fax() {
        System.out.println("Faxing...");
    }
}
