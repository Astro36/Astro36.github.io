---
layout: post
title: The Unlicense 라이선스 정리
category: Summary
---

# 주의

> 본 문서의 내용은 참고 용도로만 활용 가능하며 자세한 사항은 전문가와 상담을 통해 해결하시길 바랍니다.

# None vs The Unlicense

| None                         | The Unlicense                                  |
| ---------------------------- | ---------------------------------------------- |
| ![None](https://gist.githubusercontent.com/Astro36/e573bcc5454f5421738c89cf8595c78a/raw/2f3d7c514d73c17e54d9c8735ed5c6005f55b54c/github_new_none.png) | ![The Unlicense](https://gist.githubusercontent.com/Astro36/e573bcc5454f5421738c89cf8595c78a/raw/2f3d7c514d73c17e54d9c8735ed5c6005f55b54c/github_new_the_unlicense.png) |

`None`은 말그대로 어떤 라이선스 파일도 포함시키지 않는다.

`The Unlicense`는 [The Unlicense](http://unlicense.org/)라는 라이선스 파일을 포함시킨다는 뜻이다.

# The Unlicense?

> 퍼블릭 도메인으로 작업물을 공개할 수 있는 라이선스

## Permissions(허가)

- Commercial use: 소프트웨어와 배포물의 금전적 목적의 사용을 허가
- Distribution: 소프트웨어의 배포 허가
- Modification: 소프트웨어의 수정 허가
- Private use: 소프트웨어의 개인적 목적으로의 사용 및 수정 허가

## Limitations(제한)

- Liability: 책임의 제한을 포함
- Warranty: 어떠한 보증도 제공하지 않음

`책임의 제한`과 `보증의 부인`의 의미는 라이선스마다 다소 차이가 있으나 이해를 돕기위해 일반적인 의미를 첨부합니다.

- `책임의 제한`: 저작권자나 기여자가 수정한 코드로 인해 소프트웨어 사용의 손해가 발생하더라도 이를 책임지지 않음
- `보증의 부인`: 소프트웨어가 목적에 맞게 잘 동작함을 보증하지 않음, 사용으로 인해 발생가능한 위험은 사용자가 부담

# The Unlicense vs UNLICENSED

`UNLICENSED`는 라이선스를 설정하지 않았다는 뜻이다.

npm의 `package.json`에서는, 타인에게 비공개 패키지의 사용 권한을 부여하지 않길 원하는 경우 `UNLICENSED` 값을 사용한다.

package.json:

```json
{ "license": "UNLICENSED" }
```

[npm-package.json license](https://docs.npmjs.com/files/package.json#license)

# Reference

- [Unlicense.org](http://unlicense.org/)
- [The Unlicense | Choose a License](https://choosealicense.com/licenses/unlicense/)
- [라이선스 의무사항 용어(보증의 부인, 책임의 제한) 문의](https://www.oss.kr/oss_license_qna/show/6b39feca-f30b-4e82-9f3c-12e55ae470c3)
- [npm-package.json](https://docs.npmjs.com/files/package.json)
