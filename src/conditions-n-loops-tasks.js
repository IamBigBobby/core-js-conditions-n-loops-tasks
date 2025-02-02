/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  if (number >= 0) {
    return true;
  }

  return false;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}
/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  for (let i = queen.x; i <= 8; i += 1) {
    if (i === king.x && queen.y === king.y) {
      return true;
    }
  }

  for (let i = queen.x; i > 0; i -= 1) {
    if (i === king.x && queen.y === king.y) {
      return true;
    }
  }

  for (let i = queen.y; i <= 8; i += 1) {
    if (queen.x === king.x && i === king.y) {
      return true;
    }
  }

  for (let i = queen.y; i > 0; i -= 1) {
    if (queen.x === king.x && i === king.y) {
      return true;
    }
  }

  for (let i = queen.x, j = queen.y; i <= 8 && j <= 8; i += 1, j += 1) {
    if (i === king.x && j === king.y) {
      return true;
    }
  }

  for (let i = queen.x, j = queen.y; i > 0 && j > 0; i -= 1, j -= 1) {
    if (i === king.x && j === king.y) {
      return true;
    }
  }

  for (let i = queen.x, j = queen.y; i > 0 && j <= 8; i -= 1, j += 1) {
    if (i === king.x && j === king.y) {
      return true;
    }
  }

  for (let i = queen.x, j = queen.y; i <= 8 && j > 0; i += 1, j -= 1) {
    if (i === king.x && j === king.y) {
      return true;
    }
  }

  return false;
}
/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b || a === c || b === c) {
      return true;
    }
  }

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romeNumbersArr = ['X', 'IX', 'V', 'IV', 'I'];
  const values = [10, 9, 5, 4, 1];

  let remainingNumber = num;
  let result = '';

  for (let i = 0; i < romeNumbersArr.length; i += 1) {
    while (remainingNumber >= values[i]) {
      result += romeNumbersArr[i];
      remainingNumber -= values[i];
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let strResult = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        strResult += 'zero';
        break;
      case '1':
        strResult += 'one';
        break;
      case '2':
        strResult += 'two';
        break;
      case '3':
        strResult += 'three';
        break;
      case '4':
        strResult += 'four';
        break;
      case '5':
        strResult += 'five';
        break;
      case '6':
        strResult += 'six';
        break;
      case '7':
        strResult += 'seven';
        break;
      case '8':
        strResult += 'eight';
        break;
      case '9':
        strResult += 'nine';
        break;
      case '10':
        strResult += 'ten';
        break;
      case '-':
        strResult += 'minus';
        break;
      case '.':
      case ',':
        strResult += 'point';
        break;
      default:
        break;
    }

    if (!(i === numberStr.length - 1)) {
      strResult += ' ';
    }
  }
  return strResult;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < str.length; i += 1) {
    if (str[i] !== str[j]) {
      return false;
    }
    j -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (letter === str[i]) {
      return i;
    }
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let currentNum = num;

  while (currentNum > 0) {
    if (currentNum % 10 === digit) {
      return true;
    }
    currentNum = Math.floor(currentNum / 10);
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let sumBefore = 0;
    let sumAfter = 0;
    for (let j = 0; j < i; j += 1) {
      sumBefore += arr[j];
    }
    for (let k = arr.length - 1; k > i; k -= 1) {
      sumAfter += arr[k];
    }

    if (sumBefore === sumAfter) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];

  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = '';
    }
  }

  let counter = 1;
  let startCol = 0;
  let endCol = size - 1;
  let statrRow = 0;
  let endRow = size - 1;

  while (startCol <= endCol && statrRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      arr[statrRow][i] = counter;
      counter += 1;
    }

    statrRow += 1;

    for (let i = statrRow; i <= endRow; i += 1) {
      arr[i][endCol] = counter;
      counter += 1;
    }

    endCol -= 1;

    for (let i = endCol; i >= startCol; i -= 1) {
      arr[endRow][i] = counter;
      counter += 1;
    }

    endRow -= 1;

    for (let i = endRow; i >= statrRow; i -= 1) {
      arr[i][startCol] = counter;
      counter += 1;
    }

    startCol += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const copyMatrix = matrix;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i += 1) {
    for (let j = i + 1; j < cols; j += 1) {
      const tempMatrix = copyMatrix[i][j];
      copyMatrix[i][j] = copyMatrix[j][i];
      copyMatrix[j][i] = tempMatrix;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    let start = 0;
    let end = cols - 1;

    while (start < end) {
      const tempMatrix = copyMatrix[i][start];
      copyMatrix[i][start] = copyMatrix[i][end];
      copyMatrix[i][end] = tempMatrix;

      start += 1;
      end -= 1;
    }
  }

  return copyMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const copyArr = arr;

  if (copyArr.length <= 1) {
    return copyArr;
  }

  const leftPart = [];
  const rightPart = [];
  const pivot = Math.floor(copyArr.length / 2);

  let leftPartIndex = 0;
  let rightPartIndex = 0;

  for (let i = 0; i < copyArr.length; i += 1) {
    if (i !== pivot) {
      if (copyArr[i] < copyArr[pivot]) {
        leftPart[leftPartIndex] = copyArr[i];
        leftPartIndex += 1;
      } else {
        rightPart[rightPartIndex] = copyArr[i];
        rightPartIndex += 1;
      }
    }
  }
  const sortedArr = [
    ...sortByAsc(leftPart),
    copyArr[pivot],
    ...sortByAsc(rightPart),
  ];

  for (let i = 0; i < arr.length; i += 1) {
    copyArr[i] = sortedArr[i];
  }
  return copyArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let resultStr = str;
  let copyIterations = iterations;

  while (copyIterations) {
    let evenStr = '';
    let oddStr = '';
    for (let i = 0; i < resultStr.length; i += 1) {
      if (i % 2 === 0) {
        evenStr += resultStr[i];
      } else {
        oddStr += resultStr[i];
      }
    }

    resultStr = `${evenStr}${oddStr}`;

    copyIterations -= 1;

    if (resultStr === str) {
      const leftIterations = copyIterations;
      copyIterations = iterations % (iterations - leftIterations);
    }
  }

  return resultStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let currentNumber = number;
  const arrNumber = [];

  while (currentNumber > 0) {
    const digit = currentNumber % 10;

    arrNumber.unshift(digit);
    currentNumber = Math.floor(currentNumber / 10);
  }

  for (let i = arrNumber.length - 1; i > 0; i -= 1) {
    if (arrNumber[i] > arrNumber[i - 1]) {
      const breakDigit = arrNumber[i - 1];

      const leftPart = [];
      for (let l = 0; l < i; l += 1) {
        leftPart.push(arrNumber[l]);
      }

      const rightPart = [];
      for (let r = i; r < arrNumber.length; r += 1) {
        rightPart.push(arrNumber[r]);
      }

      let minDigitRigthPart = rightPart[0];
      let indexMinDigitRigthPart = 0;

      for (let j = 0; j < rightPart.length; j += 1) {
        if (rightPart[j] < minDigitRigthPart && rightPart[j] > breakDigit) {
          minDigitRigthPart = rightPart[j];
          indexMinDigitRigthPart = j;
        }
      }

      rightPart[indexMinDigitRigthPart] = breakDigit;

      leftPart[leftPart.length - 1] = minDigitRigthPart;

      rightPart.sort((a, b) => a - b);

      const resultArr = [];

      for (let h = 0; h < leftPart.length; h += 1) {
        resultArr.push(leftPart[h]);
      }

      for (let n = 0; n < rightPart.length; n += 1) {
        resultArr.push(rightPart[n]);
      }

      let resultNumber = 0;

      for (let k = 0; k < resultArr.length; k += 1) {
        resultNumber = resultNumber * 10 + resultArr[k];
      }

      return resultNumber;
    }
  }
  return currentNumber;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
