import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {

	static int [][] arr = new int[100][100];

	public static void draw(int x1, int y1, int x2, int y2) {
		for(int i = x1; i < x2 ; i++) {
			for( int j = y1; j < y2; j++) {
				arr[i][j] = 1;
			}
		}
	}
	
	public static int total() {
		int sum = 0;
		for(int i =0; i < 100; i++) {
			for(int j = 0; j< 100; j++) {
				if(arr[i][j] == 1) {
					sum++;
				}
			}
		}
        return sum;
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		for(int i = 0; i < 4; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			
			draw(x1, y1, x2, y2);
        }
		System.out.println(total());
        br.close();
	}

}
