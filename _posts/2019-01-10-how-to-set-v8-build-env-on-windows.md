---
layout: post
title: Windows 10에서 V8 빌드 환경 세팅하기
category: Tutorial
---

# Requirement

- [Git for Windows](https://git-scm.com/downloads)
- Visual Studio 2017
- [depot_tools.zip](https://storage.googleapis.com/chrome-infra/depot_tools.zip)

# Instruction

1. `depot_tools.zip`을 `C:\depot_tools`에 압축풀기

2. 환경변수 지정

```bash
set PATH=C:\depot_tools;%PATH%
```

3. 프로젝트 디렉토리로 이동

```bash
cd C:\Users\SJ\GitHub\v8-build
```

4. gclient 설치

```bash
gclient
```

아래와 같이 나오면 정상

```text
Downloading CIPD client for windows-amd64 from https://chrome-infra-packages.appspot.com/client?platform=windows-amd64&version=git_revision:6e4acf51a635665e54acaceb8bd073e5c7b8259a...
WARNING: Your metrics.cfg file was invalid or nonexistent. A new one will be created.
Usage: gclient.py <command> [options]

Meta checkout dependency manager for Git.

Commands are:
  config   creates a .gclient file in the current directory
  diff     displays local diff for every dependencies
  fetch    fetches upstream commits for all modules
  flatten  flattens the solutions into a single DEPS file
  getdep   gets revision information and variable values from a DEPS file
  grep     greps through git repos managed by gclient
  help     prints list of commands or help for a specific command
  metrics  reports, and optionally modifies, the status of metric collection
  pack     generates a patch which can be applied at the root of the tree
  recurse  operates [command args ...] on all the dependencies
  revert   reverts all modifications in every dependencies
  revinfo  outputs revision info mapping for the client and its dependencies
  root     outputs the solution root (or current dir if there isn't one)
  runhooks runs hooks for files that have been modified in the local working copy
  setdep   modifies dependency revisions and variable values in a DEPS file
  status   shows modification status for every dependencies
  sync     checkout/update all modules
  validate validates the .gclient and DEPS syntax
  verify   verifies the DEPS file deps are only from allowed_hosts

Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit
  -j JOBS, --jobs=JOBS  Specify how many SCM commands can run in parallel;
                        defaults to 8 on this machine
  -v, --verbose         Produces additional output for diagnostics. Can be
                        used up to three times for more logging info.
  --gclientfile=CONFIG_FILENAME
                        Specify an alternate .gclient file
  --spec=SPEC           create a gclient file containing the provided string.
                        Due to Cygwin/Python brokenness, it can't contain any
                        newlines.
  --no-nag-max          Ignored for backwards compatibility.
```

5. Git Config 설정

```bash
git config --global user.name "My Name"
git config --global user.email "my-name@chromium.org"
git config --global core.autocrlf false
git config --global core.filemode false
git config --global branch.autosetuprebase always
```

6. GYP 환경변수 설정

```bash
set GYP_MSVS_VERSION=2017
set DEPOT_TOOLS_WIN_TOOLCHAIN=0
```

7. V8 다운로드

```bash
fetch v8
```

오류가 발생해 중단되었다면, 오류를 수정하고 아래 명령어 입력

```bash
gclient sync
```

아래와 같이 나오면 성공

```text
Downloading https://commondatastorage.googleapis.com/chromium-browser-clang/Win/clang-349417-2.tgz .......... Done.
Copying C:\Program Files (x86)/Microsoft Visual Studio/2017/Community\DIA SDK\bin\amd64\msdia140.dll to C:\Users\SJ\GitHub\v8v8\v8\third_party\llvm-build\Release+Asserts\bin
Hook ''C:\depot_tools\win_tools-2_7_6_bin\python\bin\python.exe' v8/tools/clang/scripts/update.py' took 115.97 secs
Running hooks: 100% (28/28), done.
```

# Reference

- [윈도 환경에서 V8 빌드](http://rette.iruis.net/2016/09/%EC%9C%88%EB%8F%84-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-v8-%EB%B9%8C%EB%93%9C/)
- [depot_tools_tutorial(7) Manual Page](http://commondatastorage.googleapis.com/chrome-infra-docs/flat/depot_tools/docs/html/depot_tools_tutorial.html#_setting_up)
- [Checking out and Building Chromium for Windows](https://chromium.googlesource.com/chromium/src/+/master/docs/windows_build_instructions.md)
- [Checking out the V8 source code](https://v8.dev/docs/source-code)
- [Building V8 with GN](https://v8.dev/docs/build-gn)
