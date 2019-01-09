---
title: "암스트롱 수를 구해보자"
author: Astro36
category: Algorithm
tags: ["Programming", "Javascript"]
ccl: by-nc-nd
---

```javascript
var Algorithm = {
  Math: {}
};
 
/**
 * Get the number of digit.
 * @param {number} num
 * @returns {number} The number of digit.
 */
Algorithm.Math.getDigit = function (num) {
  for (var cnt = 0; 1 <= num;) {
    num /= 10, cnt++;
  }
  return cnt;
};
 
/**
 * Get the number of each digit.
 * @param {number} num
 * @param {number} [digit]
 * @returns {(number|Array.<number>)} The number of each digit.
 */
Algorithm.Math.getEachDigit = function (num, digit) {
  var arr = num.toString().split("");
  return digit ? arr[digit] : arr;
};
 
/**
 * Get the array of Armstrong numbers.
 * @param {number} [min=100]
 * @param {number} [max=999]
 * @returns {Array.<number>} The array of Armstrong numbers.
 */
Algorithm.Math.getArmstrongNumbers = function (min, max) {
  min = min || 100;
  max = max || 999;
  if (1 > min) {
    // Error: The parameter "{min}" must be at least 1.
    return [];
  } else if (min > max) {
    // Error: The parameter "{max}" must be bigger than "{min}".
    return [];
  }
  for (var output = [0, 1], i = min; max > i; i++) {
    var digit = Algorithm.Math.getEachDigit(i),
      len = digit.length;
    if (3 > len) {
      i = 99;
    } else {
      for (var num = 0, j = 0; len > j; j++) {
        num += Math.pow(digit[j], len);
      }
      i === num && output.push(num);
    }
  }
  return output;
};
```

어떤 수와 그 수의 각 자릿수의 자릿수만큼의 제곱의 합이 같은 수를 암스트롱 수라고 합니다. 

예를 들어, 370은 각 자릿수의 세제곱 3³ + 7³ + 0³의 합이 자신과 같은 값을 가지기 때문에 암스트롱 수 입니다.

## 사용 예제

```javascript
Algorithm.Math.getArmstrongNumbers(1, 1000); // [0, 1, 153, 370, 371, 407]
```
