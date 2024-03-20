class Solution {
    public int solution(int n, int k) {
        int sum = 0;
        int service = (int)n/10;
        
        if(service > 0){
            sum = n*12000 + (k-service)*2000;
        }else{
            sum = n*12000 + k*2000;
        }
        return sum;
    }
}