# DependencyInversionViolation


O código viola o princípio DIP, que aumenta o acoplamento entre as funções do código. Que corrigido implementa uma interface para comunicar entre as funções necessárias, diminuindo o alto acoplamento do código!


```java



public class DependencyInversionSolution {
    public static void main(String[] args) {
        Device bulb = new LightBulb();
        Switch lightSwitch = new Switch(bulb);
        lightSwitch.turnOn();
    }
}


interface Device { 
    void turnOn();
    void turnOff();
}

class LightBulb implements Device {
    public void turnOn() {
        System.out.println("LightBulb is ON");
    }

    public void turnOff() {
        System.out.println("LightBulb is OFF");
    }
}


class Switch {
    private Device device;

    public Switch(Device device) {
        this.device = device;
    }

    public void turnOn() {
        device.turnOn();
    }

    public void turnOff() {
        device.turnOff();
    }
}

