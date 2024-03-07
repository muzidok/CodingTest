import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] input = br.readLine().split(" ");

        int A = Integer.parseInt(input[0]);
        
         if(A % 4 == 0 && A % 100 != 0 || A % 400 == 0){
            System.out.print(1);
         }else{
            System.out.print(0);
         }
    }
}
        