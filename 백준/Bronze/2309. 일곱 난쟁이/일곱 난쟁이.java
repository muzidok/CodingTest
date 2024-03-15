import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int arr[] = new int[9];
        int sum = 0;

        for (int i = 0; i < 9; i++) {
            int height = Integer.parseInt(br.readLine());
            arr[i] = height;
            sum += arr[i];
        }

        Arrays.sort(arr);

        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (sum - arr[i] - arr[j] == 100) {
                    for (int k = 0; k < arr.length; k++) {
                        if (k != i && k != j) {
                            System.out.println(arr[k]);
                        }
                    }
                    return;
                }
            }
        }
    }
}