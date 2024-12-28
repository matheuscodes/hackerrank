/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s: string): number {
    // Write your code here
    let left = 0;
    let right = s.length - 1
    while(left <= right) {
        if(s[left] != s[right]) {
            if((s[left] == s[right - 1]) && (s[left + 1] == s[right])) {
                if(s[left + 1] == s[right - 2]) {
                    return right;
                } else {
                    return left;
                }
            } else if(s[left] == s[right - 1]) {
                return right;
            } else {
                return left;
            }
        } else {
            left += 1;
            right -= 1;
        }
    }
    return -1;
}