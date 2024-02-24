class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] sum = {0,0};
        for (int i = 0; i < nums.length; i++){
            for (int j = 0; j < nums.length; j++){
                if (j == i) {
                    continue;
                }
                if (nums[j] + nums[i] == target) {
                    sum[0] = i;
                    sum[1] = j;
                }
            }
        }
        return sum;
    }
}