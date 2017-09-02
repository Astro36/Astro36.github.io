---
title: "함수와 객체의 프로퍼티를 가져오자"
author: Astro36
category: algorithm
tags: ['javascript']
ccl: by-nc-nd
---

```javascript
/**
 * Get properties of target object.
 * @param {string} targetName
 * @param {(Function|Object)} targetObj
 * @returns {Array.<string>} The properties of target object.
 */
function getProperties(targetName, targetObj) {
  var arr = [targetName];

  function getProperty(name, obj) {
    var type = typeof obj;
    if (type === "function") {
      arr.push(name + ".prototype");
      getProperty(name + ".prototype", obj.prototype);
    }
    for (var objKey in obj) {
      if (obj.hasOwnProperty(objKey)) {
        arr.push(name + "." + objKey);
        getProperty(name + "." + objKey, obj[objKey]);
      }
    }
  }
  getProperty(targetName, targetObj);
  return arr;
}
```

함수와 객체의 프로퍼티를 가져옵니다.

## 사용 예제

```javascript
var obj = {
  a: 1,
  b: 0,
  c: 2,
  d: function () {},
  e: function () {},
  f: {
    a: {
      a: 0,
      b: 1,
      c: 2
    },
    b: {
      a: 0,
      b: 0
    }
  }
};
obj.d.prototype = {
  a: 1,
  b: function () {}
};
obj.d.a = 1;
obj.d.b = function () {};
obj.d.b.prototype.a = 1;

getProperties("obj", obj); // ["obj", "obj.a", "obj.b", "obj.c", "obj.d", "obj.d.prototype", "obj.d.prototype.a", "obj.d.prototype.b", "obj.d.prototype.b.prototype", "obj.d.a", "obj.d.b", "obj.d.b.prototype", "obj.d.b.prototype.a", "obj.e", "obj.e.prototype", "obj.f", "obj.f.a", "obj.f.a.a", "obj.f.a.b", "obj.f.a.c", "obj.f.b", "obj.f.b.a", "obj.f.b.b"];
```
