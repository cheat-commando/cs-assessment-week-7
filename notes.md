Results for the extraLargeArray
insert 798.8251 ms
append 2.9605 ms

Results for the largeArray
insert 7.7667 ms
append 455.9 μs

Results for the mediumArray
insert 139.1 μs
append 124.2 μs

Results for the smallArray
insert 39.5 μs
append 92.5 μs

Results for the tinyArray
insert 31.5 μs
append 76.2 μs

Results for the ultraTinyArray (I made this one myself. This array only had one element)
insert 27.4 μs
append 78.7 μs


The doublerInsert function, which was using the unshift() method, definitely scales worse than the doublerAppend function, which used the push() function. Starting with the tinyArray, which had only 10 elements, each successive array has 10 times as many elements. I took the run times for each array and divided those runtimes by the runtime of the array just beneath it in size.

doublerAppend (the better function)
0.97  --- from ultraTiny to tiny
1.21  --- from tiny to small
1.34  --- from small to medium
3.67  --- from medium to large
6.49  --- from large to extraLarge

doublerInsert (the worse function)
1.15  --- from ultraTiny to tiny
1.25  --- from tiny to small
3.52  --- from small to medium
55.84  --- from medium to large
102.85 --- from large to extraLarge

We can see that both methods start out somewhat the same, jumping from ultraTiny to tiny and from tiny to small with relatively the same sized gap. Increasing the size of the arrays by factors of 10 did increase the runtimes, but only by factors of small decimals of 1. Not too shabby! A workload increas by a factor of ten and the runtime only increases by a factor of 1.25? Well done functions!

However, once the arrays get into the medium size and higher, we see that the runtime increase factors start to vary drastically. The doublerAppend function is still appearing to keep its runtime complexity less than O(n) (although I suspect it will approach O(n) asymptotically) The doublerInsert function, once it goes from medium to large, breaks far past the O(n) runtime complexity. If the workload increases by a factor of 10 (which it does), then if the runtime increases by a factor less than 10, then the complexity would be less than O(n). If the runtime increases by a factor greater than 10, then its runtime complexity is greater than O(n). Here, jumping from the medium to large array, the runtime jumps by a factor of 55.84! Then the next jump shows that its runtime increases by a factor of 102.85. This shows that the runtime complexity of the doublerInsert function is O(n^2) or greater.

The reason for this discrepancy is that the push() method only needs to add an element to the end of an array and assign an index to it, while the unshift() method needs to reassign all existing indices each time an element is added to the front of the array. When your array has to do this whole process 100000 times, it's going to take a lot longer than just tacking a new element on the end.