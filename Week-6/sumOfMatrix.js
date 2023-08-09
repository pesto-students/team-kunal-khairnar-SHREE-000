const sumOfMatrix = (matrix1, matrix2) => {
    let result = [];
    for(let i = 0; i < matrix1.length; i++) {
        let row = [];
        for(let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]); 
        };
        result.push(row);
    };
    return result;
};


const matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrix2 = [
    [7, 8, 9],
    [10, 11, 12]
];
console.log(sumOfMatrix(matrix1, matrix2));