class Solution {
    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        int distanceValue = 0;
        boolean isValid;

        // Iterate through each element in arr1
        for (int value1 : arr1) {
            isValid = true; // Assume current value1 is valid
            
            // Check against all elements in arr2
            for (int value2 : arr2) {
                // If the absolute difference is less than d, value1 is not valid
                if (Math.abs(value1 - value2) <= d) {
                    isValid = false;
                    break; // No need to check other elements in arr2 for this value1
                }
            }
            
            // If value1 is valid, increment the distance value
            if (isValid) {
                distanceValue++;
            }
        }

        return distanceValue;
    }
}
