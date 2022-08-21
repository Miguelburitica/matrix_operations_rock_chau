const utils = require("./utils");

exports.addition = function (matrixA, matrixB) {
  const matrixC = utils.zerosMatriz(matrixA.length);
  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixB.length; j++) {
      matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return matrixC;
};

exports.substraction = function (matrixA, matrixB) {
  const matrixC = utils.zerosmatrix(matrixA.length);
  for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixB.length; j++) {
      matrixC[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return matrixC;
};

exports.multiplication = function (matrixA, matrixB, m, n = m, p = m) {
  const matrixC = [];
  let matrixpC = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let placeHolderMatrixC = 0;
      for (let k = 0; k < p; k++) {
        placeHolderMatrixC += matrixA[i][k] * matrixB[k][j];
      }
      matrixpC.push(placeHolderMatrixC);
    }
    matrixC.push(matrixpC);
    matrixpC = [];
  }
  return matrixC;
};
