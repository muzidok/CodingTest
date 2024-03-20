import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {
            BufferedReader br = new BufferedReader(new InputStreamReader((System.in)));
            int A = Integer.parseInt(br.readLine());
                for(int i = A; i == A; i++){
                for(int j = 1 ; j <= 9; j++){
                    System.out.println(i + " * " + j  + " = " + A*j);
                }
            }
        }
    }