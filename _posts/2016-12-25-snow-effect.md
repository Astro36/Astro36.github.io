---
title: "SnowEffect 라이브러리"
author: Astro36
date: 2016-12-25 18:44
category: Program
tags: ["Programming", "Android", "Rhino", "Javascript", "MinecraftPE", "BlockLauncher", "SnowEffect"]
image:
  src: http://astro36.me/assets/img/posts/2016-12-25/snow_effect.png
  copyright: Astro36
ccl: by-nc-nd
---

# 사용예시

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

# 다운로드

[Download](https://github.com/Astro36/ModPE/blob/master/SnowEffect.js)
