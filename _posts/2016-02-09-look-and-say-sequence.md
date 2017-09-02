---
title: "개미수열을 구해보자"
author: Astro36
category: algorithm
tags: ['javascript']
ccl: by-nc-nd
---

```javascript
var Algorithm = {
  Array: {}
};

/**
 * Get the array of look-and-say sequence.
 * @param {number} len
 * @returns {Array.<number>} The array of look-and-say sequence.
 */
Algorithm.Array.lookAndSaySequence = function (len) {
  var arr = ["1"];
  if (len < 1) {
    return [];
  }
  for (var i = 0; i < len - 1; i++) {
    arr.push(arr[i].replace(/(\d)\1*/g, function ($1) {
      return $1.length.toString() + $1[0];
    }));
  }
  return arr;
};
```

읽고 말하기 수열은 다음과 같이 시작하는 수열이다. 대한민국에서는 소설 개미에서 소개되면서 유명해졌기 때문에, 개미 수열이란 이름으로 잘 알려져 있다.

> 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...

이 수열은 앞의 수를 연속된 같은 수의 개수로 묶어서 읽는 방식으로 만들어진다.

1을 "1개의 1"로 읽는다 → 11
11을 "2개의 1"로 읽는다 → 21
21을 "1개의 2와, 1개의 1"로 읽는다 → 1211
1211을 "1개의 1과, 1개의 2와, 2개의 1"로 읽는다 → 111221

출처: [https://ko.m.wikipedia.org/](https://ko.m.wikipedia.org/wiki/읽고_말하기_수열)

## 사용 예제

```javascript
Algorithm.Array.lookAndSaySequence(5); // ["1", "11", "21" "1211", "111221"];
```
