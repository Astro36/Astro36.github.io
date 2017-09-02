---
title: "로마 숫자 변환기"
author: Astro36
category: algorithm
tags: ['javascript']
ccl: by-nc-nd
---

# 로마 숫자 변환기

```javascript
/**
 * 10진수를 로마 숫자로 변환합니다.
 * @author Astro <astr36@naver.com>
 * @since 2016-07-05
 * @param {Number} num 10진수
 * @returns {String} 로마 숫자
 */
const decimalToRoman = (num) => {
  let chars = ["I", "II", "III", "IV", "V", "VI", "VII", "VII", "IX", "X", "XL", "VL", "IL", "L", "XC", "VC", "IC", "C", "CD", "LD", "XD", "VD", "ID", "D", "CM", "LM", "XM", "VM", "IM", "M"],
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 45, 49, 50, 90, 95, 99, 100, 400, 450, 490, 495, 499, 500, 900, 950, 990, 995, 999, 1000];
  let str = "";
  while (num > 0) {
    for (let i = nums.length; i--;) {
      let tmp = nums[i];
      if (tmp <= num) {
        num -= tmp;
        str += chars[i];
        break;
      }
    }
  }
  return str;
};
```

## 로마 숫자

로마 숫자는 고대 로마에서 쓰인 기수법이다. 로마 문자에 특정 수를 대입하고 이를 조합하여 수를 나타낸다. 1에서 10까지는 I, II, III, IV, V, VI, VII, VIII, IX, X 와 같이 표기한다.

로마 숫자는 기본적으로 기호를 합산하는 방식으로 조합되는 가법적 기수법(加法的 記數法)이다. 예를 들어 I 이 세개면 III (3) 이고 55는 L (50) + V(5) = LV(55)와 같은 식으로 표기된다. 로마 숫자에는 0에 대한 표기 방법이 없다.

세월이 흐르면서 보다 간단한 표기법을 위해 감산 표기법이 개발되었다. 감산 표기법은 V(5)나 X(10), C(100)와 같은 큰수 앞에 I과 같은 작은 수를 놓아 큰 수에서 작은 수를 뺀 값을 표기하는 방법이다. 예를 들어 초기에는 4를 표시하는 데 IIII가 널리 쓰였으나 이후에는 IV가 널리 쓰였다. 이 경우 IV = V - I와 같이 감산 표기법이 적용된 것이다. 감산 표기법은 XL (40), CD (400)과 같은 경우에도 쓰인다.

출처: [https://ko.wikipedia.org/](https://ko.wikipedia.org/wiki/%EB%A1%9C%EB%A7%88_%EC%88%AB%EC%9E%90)

## 사용 예시

```javascript
decimalToRoman(182); // "CLXXXII"
decimalToRoman(2017); // "MMXVII"
decimalToRoman(480); // "LDXXX"
```
