---
title: "색상 스크롤바 라이브러리"
author: Astro36
date: 2016-09-06 19:32
category: Program
tags: ["Programming", "Android", "Rhino", "Javascript", "MinecraftPE", "BlockLauncher", "색상 스크롤바"]
image:
  src: http://astro36.github.io/assets/img/posts/2016-09-06/scrollbar.png
  copyright: Astro36
ccl: by-nc-nd
---

# 사용 예시

```javascript
const Color_ = android.graphics.Color,
    ColorDrawable_ = android.graphics.drawable.ColorDrawable,
    Gravity_ = android.view.Gravity,
    LinearLayout_ = android.widget.LinearLayout,
    PopupWindow_ = android.widget.PopupWindow,
    TextView_ = android.widget.TextView,
    CONTEXT = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
    DP = CONTEXT.getResources().getDisplayMetrics().density;

function useItem() {
    CONTEXT.runOnUiThread({
        run() {
            try {
                let text = new TextView_(CONTEXT),
                    layout = new LinearLayout_(CONTEXT),
                    scroll = new ColoredScrollView();
                text.setText("a\n\n\n\n\n\n\n\n\n\nb\n\n\n\n\n\nc\n\n\n\n\n\nd\n\n\n\n\ne");
                layout.addView(text);
                scroll.addView(layout);
                let window = new PopupWindow_(scroll.show(), DP * 340, DP * 320);
                window.setBackgroundDrawable(new ColorDrawable_(Color_.rgb(255, 255, 255)));
                window.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER, 0, 0);
            } catch(e) {
                print(e);
            }
        }
    });
}
```

# 다운로드

[Download](https://github.com/Astro36/ModPE/blob/master/ColoredScrollView.js)
