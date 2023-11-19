import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        try (Scanner entrada = new java.util.Scanner(System.in)) {
            System.out.println("Digite a velocidade do fluido na seção considerada (V)");
            double V = entrada.nextDouble();
            System.out.println("Digite a altura na direção da gravidade desde uma cota de referência (h)");
            double h = entrada.nextDouble();
            System.out.println("Digite a pressão ao longo da linha de corrente (P) ");
            double P = entrada.nextDouble();
            System.out.println("Digite a densidade do fluido (p) ");
            double p = entrada.nextDouble();
            double g = 9.789;
            double valorFinal = ((V*V/2)+(P/p)+(g*h));
            System.out.println(valorFinal);
        }
    }
}