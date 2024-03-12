import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader b = new BufferedReader(new InputStreamReader(System.in));

        String str = b.readLine();
        StringTokenizer st = new StringTokenizer(str, " ");
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());

        int arr[] = {A,B};

        if(arr[1] >= 45){
            arr[1] -= 45;
        }else{
            if(arr[0] == 0 ){
                arr[0] =23;
                arr[1] = 60 -(45 - arr[1]);
            }else if(arr[0] > 0){
                arr[0]--;
                arr[1] = 60 - (45 -arr[1]);
            }
        }

        for (int i: arr) {
            System.out.print(i+ " ");
        }
    }
}