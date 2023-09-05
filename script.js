//the board is 8 x 8
//maybe created it with 2 for loops using arrays
//for the knight create class maybe with three properties
//the knight like a chess piece that would be moved pointing to null
//starting point and ending point that also points to null
//then the knight will be moved from point 1 to point 2 for example

//maybe hardcode all possible moves that way the knight will not make
//illegal moves of the board ?
//two choices here either breadth first search or depth first search
//breadth first search, in the binary search tree was going in levels
//from level 0 to 3 until the leaf nodes are reached then it stops.
//in depth first search there was three algorithms in-order, pre-order and post-order
//maybe choose between BFS or one of the DFS ?
//the shortest path needs to be found, here the graphs will be used so
//directed graphs makes no sense, weighted graphs either, to found the shortest path
//be calculating from each piece to the board to the desired one..
//undirected graphs are ways to go, here is one of the examples.

//So the knight moves from 3, 3 (u, v) to 4, 3 (u, v)
//u represents the vertices, and v are the edges of the graph
// > knightMoves([3,3],[4,3])
// => You made it in 3 moves!  Here's your path:
//Hmm so the first thing the knights has start from [3,3] => [4,5] => [2,4] => [4,3]
//i would assume since we are working from matrix it was to make these moves
//only in the board maybe using a for loop, recursion ???
//but it has to be some constrains to know that the knight moves only in these squares
//so far this is what is known to be, but i guess i missed more things, hmm
//   [3,3]
//   [4,5]
//   [2,4]
//   [4,3]

//function knightMoves, that takes an parameter two arrays
//the first move is from [0, 0] => [1,2]
//the second move is from [0,0] => [3,3] => [0,0] => [1,2] => [3,3]
//the third move is from [3,3] => [0,0] => [3,3] => [1,2] => [0,0]
//The pattern is i think going from one coordination to another
//by traversing the neighbor nodes, hmm

// knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
// knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
// knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]

// class Node {
//   constructor(knight, startPoint, endPoint) {
//     this.knight = null;
//     this.startPoint = null;
//     this.endPoint = null;
//   }

//   knightMoves([arrayStart], [arrayEnd]) {}
// }
