---
title: Rust의 Iter와 IntoIter의 차이점 정리
category: Summary
tags: ["Programming", "Rust", "Iterator", "Loop", "Performace"]
---

Rust의 반복자(Iterator)에는 `Iter`와 `IntoIter` 2가지가 있는데 한 번 정리해보았다.

# Iter

`Iter`는 벡터와 슬라이스 같은 것에서 호출할 수 있다.

```rust
let v = vec![1, 2, 3];
println!("2 in v: {}", v.iter().any(|&x| x == 2));
```

위의 코드를 보면 알 수 있듯, `v.iter()`는 v를 참조하는 반복자를 생성한다.

`.iter()`에서는 값을 읽을 수만 있고, 수정할 수는 없기 때문에 가변 참조자를 빌려주는 반복자를 생성하고 싶다면, `.iter_mut()`를 이용해야 한다.

```rust
let mut v = vec![1, 2, 3];
println!("{:?}", v.iter_mut().map(|&mut x| x * 2).collect::<Vec<i32>>());
```

[Effectively Using Iterators In Rust](https://hermanradtke.com/2015/06/22/effectively-using-iterators-in-rust.html)에서는 사용할 일은 적지만, `sort_by`와 함께 사용하면 좋다고 소개한다.

```rust
fn main() {
    let mut teams = [
        [ ("Jack", 20), ("Jane", 23), ("Jill", 18), ("John", 19), ],
        [ ("Bill", 17), ("Brenda", 16), ("Brad", 18), ("Barbara", 17), ]
    ];

    let teams_in_score_order = teams
        .iter_mut()
        .map(|team| {
            team.sort_by(|&a, &b| a.1.cmp(&b.1).reverse());
            team
        })
        .collect::<Vec<_>>();

    println!("Teams: {:?}", teams_in_score_order);
}
```

# IntoIter

`IntoIter`는 값을 빌려(borrow)오는 `Iter`와 다르게 값을 이동(move)시킨다.

```rust
let mut v = vec![1, 2, 3];
println!("{:?}", v.into_iter().map(|x| x * 2).collect::<Vec<i32>>());
```

주로 `map` 돌릴 때 사용한다고 생각하면 된다.

# For vs Iterator

너무 짧은 것 같아 For 반복문과 반복자의 성능을 비교해 보았다.

아래는 `아서 코난 도일`의 `셜록 홈스의 모험`에서 `the`를 찾는 벤치마크 결과이다.

```text
test bench_search_for  ... bench:  19,620,300 ns/iter (+/- 915,700)
test bench_search_iter ... bench:  19,234,900 ns/iter (+/- 657,200)
```

대부분 언어와는 다르게 반복자가 조금 더 빠르다.

Rust에서 반복자는 고수준의 추상이지만, 컴파일되면 저수준의 코드와 같은 수준으로 내려간다.

이는 Rust의 비용 없는 추상화의 특징 중 하나로, 추상을 사용 함으로써 실행 시간이 늘어난다는 등의 오버헤드가 발생하지 않는다.

이상으로 정리를 마무리하겠다.

# Reference

- [Iterator::any](https://doc.rust-lang.org/stable/rust-by-example/fn/closures/closure_examples/iter_any.html)
- [What is the difference between iter and into_iter?](https://stackoverflow.com/questions/34733811/what-is-the-difference-between-iter-and-into-iter)
- [Effectively Using Iterators In Rust](https://hermanradtke.com/2015/06/22/effectively-using-iterators-in-rust.html)
- [성능 비교하기: 루프 vs. 반복자](https://rinthel.github.io/rust-lang-book-ko/ch13-04-performance.html)
