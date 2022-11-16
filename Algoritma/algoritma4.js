let matrixExample = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
    
  ];
  
  function sumUpDiagonals(matrix) {
    // creating an object called sumDiagonals
    let sumDiagonals = { primary: 0, secondary: 0 };
  
  
    let matrixLength = matrix.length;

    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.primary += matrix[i][i];
      sumDiagonals.secondary += matrix[i][matrixLength - i - 1];
    }
    let result = sumDiagonals.primary - sumDiagonals.secondary
    // return the object
    return result;
  }
  
  console.log(sumUpDiagonals(matrixExample)); 