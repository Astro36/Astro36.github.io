---
title: Node.js에서 FFI로 Rust를 이용해보자
category: Tutorial
---

# 소개

Rust는 성능이 우수한 로우 레벨 프로그래밍 언어 중 하나입니다. 또한, 비용 없는 추상화, 메모리 안정성, 데이터 레이스 없는 스레딩 등등을 지원하며 C++에 비해 문법도 간결합니다. 이러한 장점의 Rust를 Node와 결합시켜 사용한다면, Node의 부족한 성능을 메꿀 수 있습니다. Node에서 Rust에서 작성한 함수를 호출하기 위해서는 FFI(Foreign function interface, 외부 함수 인터페이스)를 사용해야 합니다. 아래는 준비물입니다.

# 준비물

- [Node.js](https://nodejs.org/ko/)
- [Python v2.7](https://www.python.org/download/releases/2.7/) (v3.* 버전은 안 됨)
- [Rust](https://www.rust-lang.org/ko-KR/)

# 시작하기

우선 Node 프로젝트를 생성합시다.

```bash
npm init
```

FFI를 이용하기 위해서는 아래와 같은 패키지를 설치해야 합니다.

```bash
npm install node-gyp
npm install ffi
```

Node 패키지가 설치되었으면, Rust 프로젝트를 생성합니다.

```bash
cargo new --lib project_name
```

그리고 `Cargo.toml`에 `crate-type=["dylib"]`를 추가합니다.

```toml
[lib]
name="filename"
crate-type=["dylib"]
```

이제 기본적인 세팅이 완료되었습니다!

# 코딩하기

간단한 더하기 함수로 예제를 작성했습니다.

`src/lib.rs` 파일을 아래와 같이 수정해줍니다.

```rust
// src/lib.rs
#[no_mangle]
pub extern fn add(a: i64, b: i64) -> i64 {
    a + b
}
```

이 부분은 본인이 원하는 함수로 작성할 수 있습니다. 이때, `#[no_mangle]`과 `pub extern`은 FFI에서 꼭 필요한 부분이니 깜박하고 안 써주는 일이 없도록 합니다.

다음은 작성한 `src/lib.rs` 파일을 컴파일 해줘야 합니다.

```bash
cargo build --release
```

컴파일이 끝나면 파일은 `target/release` 위치에 `.dll`, `.dylib`, `.so` 확장자 중 하나로 출력되어 있을 것입니다.

그럼 다시 Node로 돌아와 봅시다.

`index.js` 파일을 하나 만들어 아래와 같이 작성해줍니다.

```javascript
const ffi = require("ffi");

// 파일 경로는 Rust 바이너리 파일의 경로로 바꿔줄 것
const lib = ffi.Library('./target/release/your-file.so',{
    add: ['int64', ['int64', 'int64']],
    // 함수이름: [반환타입, [인자1타입, 인자2타입, ...]]
});

console.log(lib.add(1, 2)); // 3
```

> 전달할 수 있는 타입은 [Ref](https://github.com/TooTallNate/ref/wiki/Known-%22types%22) 패키지를 참고해주세요.

이제 Node를 실행시켜 결과를 확인합니다.

```bash
node index.js
```

결과가 잘 나오셨다면 성공입니다.

# 결론

그렇다면 Rust FFI는 어디에 사용할까요? Rust의 우수한 성능을 이용해 CPU에 부하가 큰 작업이나 병렬로 연산을 해야 될 경우 요긴하게 사용될 수 있습니다.

제 [KoreanDictionary](https://github.com/Astro36/KoreanDictionary) 패키지의 경우 표준국어대사전을 병렬적으로 크롤링하기 위해 Rust FFI를 사용했습니다. 병렬 크롤링의 경우 GitHub의 소스를 참고해주세요.

이상입니다.
