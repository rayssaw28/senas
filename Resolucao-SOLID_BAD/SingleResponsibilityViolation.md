O código SingleResponsibilityViolation violava o Princípio da Responsabilidade Única (SRP) pois a classe Invoice tinha múltiplas responsabilidades.
A solução é dividir essas responsabilidades em classes separadas, garantindo um design mais modular.



public class SRPCorrectedInvoice {
    public static void main(String[] args) {
        Invoice invoice = new Invoice(1000);
        InvoicePrinter printer = new InvoicePrinter();
        InvoiceRepository repository = new InvoiceRepository();

        printer.print(invoice);
        repository.save(invoice);
    }
}


class Invoice {
    private double amount;

    public Invoice(double amount) {
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}


class InvoicePrinter {
    public void print(Invoice invoice) {
        System.out.println("Invoice amount: " + invoice.getAmount());
    }
}


class InvoiceRepository {
    public void save(Invoice invoice) {
        System.out.println("Saving invoice to database...");
    }
}
