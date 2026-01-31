package Q5;

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.square(calc.add(
                calc.multiply(3,4),
                calc.multiply(5,7))));

        System.out.println(calc.add(calc.square(
                calc.add(4,7)),
                calc.square(calc.add(8,3))));

    }
}
