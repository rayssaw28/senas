
O código TightCouplingViolation apresenta Tight Coupling porque a classe Car depende diretamente da classe Engine. Isso viola o Princípio da Inversão de Dependência (DIP) do SOLID, pois:

A classe Car está fortemente acoplada à classe Engine, tornando difícil a substituição do motor por outro tipo.
A falta de uma abstração (interface) impede que diferentes implementações de motor sejam usadas sem modificar a classe Car.

Para resolver isso, devemos inverter a dependência introduzindo uma interface Engine e permitindo que Car dependa dessa abstração. 


public class DIPCorrectedCar {
    public static void main(String[] args) {
        Engine engine = new PetrolEngine();
        Car car = new Car(engine);
        car.start();
    }
}


interface Engine {
    void start();
}


class PetrolEngine implements Engine {
    public void start() {
        System.out.println("Petrol engine started");
    }
}


class ElectricEngine implements Engine {
    public void start() {
        System.out.println("Electric engine started silently");
    }
}


class Car {
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        engine.start();
        System.out.println("Car is running");
    }
}
