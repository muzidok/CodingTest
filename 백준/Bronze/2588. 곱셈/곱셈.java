import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int a = input.nextInt();
        int b = input.nextInt();
        int d = b % 10; 
        int c = (b / 10) % 10; 
        int e = b / 100;  

        System.out.println(a * d);
        System.out.println(a * c);
        System.out.println(a * e);
        System.out.println(a * b);
    }
}