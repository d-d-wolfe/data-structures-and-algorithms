## Insertion Sort

- Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Pseudocode
    
    
     InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
    

## Trace

Sample Array: [`8,4,23,42,16,15]`

**Pass 1**:

![Pass 1 of Insertion Sort][1]

In the first pass through of the insertion sort, we evaluate if there is a smaller number in the array than what is currently present in index 0. We find this smaller number right away in index 1. The minimum value gets updated to remember this index. At the end of the evaluation, the smaller number will be swapped with the current value in index i. This results in our smallest number of our array being placed first.

**Pass 2**:

![Pass 2 of Insertion Sort][2]

The second pass through the array evaluates the remaining values in the array to see if there is a smaller value other than the current position of i. 8 is the 2nd smallest number in the array, so it "swaps" with itself. The minimum value does not change at all during the iteration of this pass.

**Pass 3**:

![Pass 3 of Insertion Sort][3]

The third pass through evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are smaller than the value in position 2. Each time a smaller number than the current minimum is found, the variable will update to the new smallest number. In this case, 15 is the next smallest number. As a result, it will swap with position 2.

And so on, until all the numbers are in order.

## Efficency

* Time: O(n^2) 
    * The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
* Space: O(1) 
    * No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).

## Whiteboard

[My Whiteboard](insertionSort.png)
