O código ViolationOfEncapsulation viola o princípio da encapsulação porque os atributos da classe Person são públicos. Isso permite que qualquer classe externa modifique os dados diretamente, o que pode levar a dados inconsistentes e falta de controle sobre as regras de negócio.

Problemas:
1. Qualquer código pode alterar name e age sem restrições.
2. Não há controle sobre valores inválidos (ex: idade negativa).
3. Falta de flexibilidade para mudanças futuras na estrutura da classe.

A solução é tornar os atributos privados e fornecer métodos getters e setters para acessar e modificar os dados de maneira controlada.






public class EncapsulationCorrected {
    public static void main(String[] args) {
        Person person = new Person();
        person.setName("John Doe");
        person.setAge(30);
        System.out.println(person.getName() + " is " + person.getAge() + " years old.");
    }
}


class Person {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        } else {
            throw new IllegalArgumentException("Age cannot be negative.");
        }
    }
}
