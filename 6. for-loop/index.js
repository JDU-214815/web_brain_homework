// function generatePattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let pattern = '';
//       for (let j = 1; j <= rows; j++) {
//         if (i === 1 || i === rows || j === 1 || j === rows || i === j || j === rows - i + 1) {
//           pattern += '* ';
//         } else {
//           pattern += '  ';
//         }
//       }
//       console.log(pattern);
//     }
//   }

//   generatePattern(5);

// function generatePattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }

//     for (let k = 1; k <= 2 * (rows - i); k++) {
//       pattern += " ";
//     }

//     for (let j = 1; j <= i; j++) {
//       pattern += "*";
//     }

//     console.log(pattern);
//   }
// }

// generatePattern(7);

// const Rows = 5;
// const Cols = 7;

// for (let i = 0; i < Rows; i++) {
//     let row = '';
//     for (let j = 0; j < Cols; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }
