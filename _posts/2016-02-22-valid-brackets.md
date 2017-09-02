---
title: "문자열에서 괄호의 유효성을 검사하자"
author: Astro36
category: algorithm
tags: ['javascript']
ccl: by-nc-nd
---

# 문자열에서 괄호의 유효성을 검사하자

```javascript
/**
 * Check the validity of the brackets.
 * @param{string} str
 * @returns{boolean} The validity of the brackets.
 */
function isValidBracket(str) {
  return 0 > (str = str.replace(/(["'])(?:[^\\"]|\\)*\1/g, "")).search("\"") && 0 > str.search("\'") ? 0 < str.length &&
    (function () {
      for (var open = ["[", "{", "("], close = ["]", "}", ")"], cache = [], char, tmp, i = 0; i < str.length && (0 <= (tmp = close.indexOf(char = str[i])) ? cache[cache.length - 1] === open[tmp] ? cache.pop() : cache.push(" ") : true); 0 <= open.indexOf(char) && cache.push(char), i++);
      return cache.length === 0;
    })() : false;
}
```

해당 문자열의 소괄호, 중괄호, 대괄호가 올바른지 검사하는 소스입니다.

"" 또는 ''안에 있는 괄호들은 문자열처럼 취급되어 인식하지 않습니다.
단순히 개수만 본다면 ({)}는 올바른 괄호이지만 실제로는 중괄호가 소괄호와 위치가 꼬여서 올바르지 않습니다. 이를 해결하기 위해 괄호의 위치도 확인을 해 주어야 하는데 이러한 과정을 쉽게 하기 위해 소스를 만들었습니다.

## 사용 예제

```javascript
isValidBracket("{()}"); // true
isValidBracket("{\"()\"}"); // true
isValidBracket("{\"()\'}"); // false
isValidBracket("[]{}()"); // true
isValidBracket("[({)}]"); // false
isValidBracket("[\"({)}\"]"); // true
```
