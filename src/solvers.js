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
  var board = new Board({n: n});

  var findSolution = function(row) {
    //if all rows exhausted
    if (row === n) { 
      //increment solutionCount
      solutionCount++;
      //stop
      return;
    }

    //iterate over possible decisions
    for (var i = 0; i < n; i++) {
      //place a piece
      board.togglePiece(row, i); //row?
      //recurse into remaining problem
      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      //unplace a piece 
      board.togglePiece(row, i);
    }

  };
  // var currentRow, currentCol;
  // for (var currentRow = 0, currentCol = 0; currentRow < n; currentRow++) {
  //   solution.togglePiece(currentRow, currentCol);
  //   while (currentCol < n && !solution.hasAnyRooksConflicts()) {
  //     solution.togglePiece(currentRow, currentCol++);
  //   }
  //   for (var currentCol = 0; currentCol < n; currentCol++) {
  //     solution.togglePiece(currentRow, currentCol);
  //     if (solution.hasAnyRooksConflicts()) {
  //     }
  //   }
  // }
  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board ({n: n});
  var solution = board.rows();
  var findSolution = function(row) {
    //if all rows exhausted
    if (row === n) { 
      //increment solutionCount
      solution = _.map(board.rows(), function(row) {
        return row.slice();
      });
      //stop
      return;
    }

    //iterate over possible decisions
    for (var i = 0; i < n; i++) {
      //place a piece
      board.togglePiece(row, i); 
      //recurse into remaining problem
      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      //unplace a piece 
      board.togglePiece(row, i);
    }

  };
  findSolution(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});

  var findSolution = function(row) {
    //if all rows exhausted
    if (row === n) { 
      //increment solutionCount
      solutionCount++;
      //stop
      return;
    }

    //iterate over possible decisions
    for (var i = 0; i < n; i++) {
      //place a piece
      board.togglePiece(row, i); 
      //recurse into remaining problem
      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      //unplace a piece 
      board.togglePiece(row, i);
    }

  };
  findSolution(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
