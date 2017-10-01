---
title: "SnowEffect 라이브러리"
author: Astro36
date: 2016-12-25 18:44
category: Program
tags: ["Programming", "Android", "Rhino", "Javascript", "MinecraftPE", "BlockLauncher", "SnowEffect"]
image:
  src: https://m.cafe.naver.com/ImageView.nhn?imageUrl=https%3A%2F%2Fmcafethumb-phinf.pstatic.net%2FMjAxNjEyMjVfMjAg%2FMDAxNDgyNjU5MDU4MDUw.sD8YVEIJjDpmfBAX8bNsDHW_fggpPAS7c06kkuDyjvog.efjRHB1--83D8YbHzvj2Z6OTbQjnUPGm1QyK9SRjrC0g.JPEG.astr36%2FexternalFile.jpg%3Ftype%3Dw1280
  copyright: Astro36
ccl: by-nc-nd
---

## 사용예시

```javascript
let effect = new SnowEffect(),
    isShowing = false;

function useItem() {
    if (isShowing) {
        isShowing = false;
        effect.finish();
    } else {
        isShowing = true;
        effect.start();
    }
}
```

## 다운로드

[Download](https://github.com/Astro36/ModPE/blob/master/SnowEffect.js)
