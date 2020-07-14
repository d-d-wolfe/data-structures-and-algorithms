# Challenge Summary
Insertion Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Challenge Description
Write a function that uses traverses an array and inserts the values back into the array with the values in ascending order.

## Approach & Efficiency

I followed the pesudocode and wrote the function with a while loop in a for loop and returned the final array.

* Time: O(n^2) 
    * The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
* Space: O(1) 
    * No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).

## Solution
[Whiteboard](InsertionSort.jpg)
