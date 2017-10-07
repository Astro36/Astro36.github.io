---
title: "문자열인 버전을 비교하자"
author: Astro36
category: Algorithm
tags: ["Programming", "Javascript"]
ccl: by-nc-nd
---

```javascript
/**
 * Compare the version of A and B.
 * @param {string} versionA
 * @param {string} versionB
 * @returns {string} The result of comparing the versions.
 */
function checkVersion(versionA, versionB) {
  var regEx = /^\d+(?:\.\d+)*$/;
  if (regEx.test(versionA) && regEx.test(versionB)) {
    for (var tmpA = versionA.split("."),
        tmpB = versionB.split("."),
        len = Math.max(tmpA.length, tmpB.length),
        i = 0; i < len; i++) {
      var a = Number(tmpA[i] || 0),
        b = Number(tmpB[i] || 0);
      if (a > b) {
        return "A is the latest version.";
      } else if (a < b) {
        return "B is the latest version.";
      }
    }
    return "A version of A is same as a version of B.";
  }
  return "Error: Invalid format.";
}
```

## 사용 예제

```javascript
checkVersion("1.2", "1.1"); // A가 최신
checkVersion("1.0", "1.2"); // B가 최신
checkVersion("1.1.1", "1.0.2"); // A가 최신
checkVersion("10.1", "2.0"); // A가 최신
checkVersion("1.2", "1.2"); // 같음
checkVersion("2", "2.0.0"); // 같음
checkVersion("1.2", "1"); // A가 최신
checkVersion("1", "2"); // B가 최신
checkVersion("2.", "1."); // 버전 형식오류
```
