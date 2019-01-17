---
title: KR Binance SAFU pre-Hackathon Innovation League 후기
category: Postscript
---

# 1일차

![KR Binance SAFU pre-Hackathon Poster](https://astro36.github.io/assets/2019-01-17/axiomz.jpg)

블록체인에 관심있으면 누구나 참여할 수 있다는 말만 믿고 참가신청했다.

근데 가보니 대학생이 대다수여서 약간 당황했었다.

어쨌든 1일차에는 대학 교수님과 보안 전문가님을 초대해서 강연을 들었다.

배운 내용을 까먹을 수 있으니 간략하게 요약하겠다.

## 토큰 vs 코인

강연을 시작할 때 토큰과 코인의 차이점을 아냐고 물어보셨다.

토큰과 코인의 가장 큰 차이점은 마이닝(Mining) 유무이다.

토큰은 마이닝을 통해 늘어나지 않지만, 코인은 마이닝을 통해 통화량이 늘어날 수 있다.

## 트랜잭션

블록체인에서 거래를 `트랜잭션`이라고 부른다.

거래에 필요한 수수료를 이더리움에서는 `가스`라고 부르고 이더리움과 같은 하나의 단위이다.

`가스`를 지급함으로써 채굴자에게 거래 성사의 대가를 주는 것이 주요 목적이고 DDOS 등의 공격을 막을 수 있다는 것은 부수적인 효과일 뿐이라고 말씀하셨다.

## 보안과 인증

보안은 안전한 설계로부터 온다.

전문가님이 말씀하신 것 중 가장 기억에 남는 것은 `인증`이라는 단어에는 많은 뜻이있지만, 한국에서는 이 모든 것을 단어 하나로 표현하니 잘 구분하라는 것이다.

- identification(식별): 누구인지 주장하는 것
- authentication(인증): 누구인지 주장하는 것을 증명하는것
- authorization(권한부여): 권한을 부여하는 것
- certification(인증): 인증서를 획득하는 것

## 아이디어 회의

팀원 중 한 분(전산학과 4학년)께서 `알고랜드`라는 논문을 들고 오셨다.

- [Algorand: Scaling Byzantine Agreements for Cryptocurrencies](https://people.csail.mit.edu/nickolai/papers/gilad-algorand-eprint.pdf)
- [Algorand: Scaling Byzantine Agreements for Cryptocurrencies 요약(한글)](https://medium.com/decipher-media/algorand-%EC%95%94%ED%98%B8-%ED%99%94%ED%8F%90%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%99%95%EC%9E%A5-%EA%B0%80%EB%8A%A5%ED%95%9C-%EB%B9%84%EC%9E%94%ED%8B%B4-%ED%95%A9%EC%9D%98-783d2645995d)

논문의 [증명 가능한 난수 함수(Verifiable Random Function, VRF)](https://en.wikipedia.org/wiki/Verifiable_random_function)를 응용해 기존보다 빠른 블록체인 네트워크를 구축하는 아이디어를 말씀하셨다.

논문과의 차이점은 VRF를 여러개 이용해 다수의 노드 풀(Node Pool)을 구축하고 노드 풀끼리 통신함으로써 더 빠르게 데이터를 전송할 수 있다는 것이다.

# 2일차

2일차에는 아이디어 발표와 수상을 했다. 수상은 못 했지만, 다른 팀의 발표의 간단한 요약과 보고 느낀 점을 적었다.

## 기술 임치

블록체인을 이용해 기술자료 임치 네트워크를 구축한다는 아이디어이다.

기존의 [기술임치제도](https://www.kescrow.or.kr/tems/jedo/jedo0101.do)는 비싼 수수료와 관리 센터의 불신으로 인해 중소기업이 잘 활용하지 않고 있다고 한다.

이를 해결하기 위해 블록체인을 이용해 기술 자료를 관리한다면 상대적으로 적은 돈으로 기술자료의 무결성을 보장할 수 있다고 말했고, 진짜 블록체인을 활용하기에 적절한 분야라는 생각이 들었다.

## 보안 보상

사람들은 계정의 비밀번호를 주기적으로 바꾸는 것을 귀찮아한다.

그러면 비밀번호를 바꿀때마다 보상을 준다면 어떨까?

사람들에게 동기부여도 될것이고 계종의 보안 역시 향상 될 것이다.

적절한 보상을 통해 사람들의 행동을 윈하는 방향으로 이끄는 것이 참신하다고 느꼈다.

이상으로 KR Binance SAFU pre-Hackathon Innovation League 후기를 마무리하겠다.
