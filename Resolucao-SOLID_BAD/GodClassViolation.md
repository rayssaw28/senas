# GodClassViolation

O codigo GodClassViolation viola o principio SRP, atribuindo mais de uma função À mesma classe
e sua solução é diluir oo código em mais de uma classe, distribuindo corretamente suas funções


```java



public class SRPCorrected {
    public static void main(String[] args) {
        Application app = new Application();
        app.run();
    }
}


class Application {
    private final AuthService authService = new AuthService();
    private final DashboardService dashboardService = new DashboardService();
    private final PaymentService paymentService = new PaymentService();
    private final ReportService reportService = new ReportService();

    public void run() {
        System.out.println("Running application...");
        authService.authenticateUser();
        dashboardService.loadDashboard();
        paymentService.processPayments();
        reportService.generateReports();
    }
}


class AuthService {
    public void authenticateUser() {
        System.out.println("Authenticating user...");
    }
}
class DashboardService {
    public void loadDashboard() {
        System.out.println("Loading dashboard...");
    }
}
class PaymentService {
    public void processPayments() {
        System.out.println("Processing payments...");
    }
}
class ReportService {
    public void generateReports() {
        System.out.println("Generating reports...");
    }
}
