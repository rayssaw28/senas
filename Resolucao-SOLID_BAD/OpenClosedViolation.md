O código viola o Princípio do Aberto/Fechado (Open/Closed Principle - OCP), o segundo princípio do SOLID

Correção: A lógica do método calculateDiscount não precisa ser alterada para novos tipos de clientes.
Basta adicionar novos pares chave-valor ao DISCOUNT_RATES, sem modificar o código existente.


import java.util.Map;

class DiscountCalculator {
    private static final Map<String, Double> DISCOUNT_RATES = Map.of(
        "Regular", 0.1,
        "VIP", 0.2
    );

    public double calculateDiscount(String customerType, double amount) {
        return amount * DISCOUNT_RATES.getOrDefault(customerType, 0.0);
    }
}
