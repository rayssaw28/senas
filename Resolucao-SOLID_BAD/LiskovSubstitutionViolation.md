
A classe Ostrich sobrescreve o método fly() da classe Bird lançando uma exceção, violando o Princípio da Substituição de Liskov (LSP)

public class LiskovSubstitutionFix {
    public static void main(String[] args) {
        Bird bird = new Sparrow();
        bird.fly(); // Saída: "Sparrow is flying"
    }
}

abstract class Bird {
}

class Sparrow extends Bird {
    public void fly() {
        System.out.println("Sparrow is flying");
    }
}

class Ostrich extends Bird {
}
