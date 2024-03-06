class Solution {
    public int[] solution(int start_num, int end_num) {
        int[] arr = new int [end_num - start_num + 1];
        for(int i = 0; i < arr.length; i++){
            for(int j = start_num; j <= end_num; j++){
                arr[i] = start_num + i;
            }
        }
        return arr;
    }
}