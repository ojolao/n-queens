/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  for (var currentRow = 0; currentRow < n; currentRow++) {
    for (var currentCol = 0; currentCol < n; currentCol++) {
      solution.togglePiece(currentRow, currentCol);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(currentRow, currentCol);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  /*
  How do we find all NRooks solutions for N? Having found one N-Rooks solution, how do we find all NRooks solutions for N?
  Is there a relationship between what we are iterating? Yes--if we place it in one row, then the rest of that row, and the rest of
  that column is crossed out. so it's where we start out. So if we start out at 0, we get one set of solutions, if we start out at 1, we
  get another set of solutions
  Given N, 
  function that takes a board as an imput,
        place a piece,  
       if (this board has no conflicts and) all the pieces have been placed
          return count;
        if all the pieces have not been placed, 
          place the next piece
          find all the number of solutions with the next piece placed



       while (it runs findNRooksSolution on our board)
        sum++
        togglePiece

  output is to increment solution count
  */

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  for (var currentRow = 0; currentRow < n; currentRow++) {
    solution.togglePiece(currentRow, currentCol);
    if (solution.hasAnyQueensConflicts()) {
      solution.togglePiece(currentRow, currentCol);
    }
    for (var currentCol = 0; currentCol < n; currentCol++) {
      solution.togglePiece(currentRow, currentCol);
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(currentRow, currentCol);
      }
    }
  }
  console.log(solution.rows());
  return solution.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));

};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
