# react app

- [Commit Message Convention](#Commit-Message-Convention)
- [GitBash Command](#GitBash-Command)

# Commit Message Convention
## Commit Message를 위한 규칙
1. 제목과 본문을 한 줄 띄워 분리하기 
2. 모두 영어로 작성하기 
3. 제목은 영문 기준 50자 이내로
4. 제목 첫글자를 대문자로
5. 제목 끝에 `.` 쓰지않기
6. 제목은 `명령조` 로 작성
7. 본문은 `어떻게`보다 `무엇을`, `왜`에 맞춰 작성하기

## 1. Commit Message Structure
- 커밋 메세지는 제목/본문/꼬리말로 구성됩니다.
- 타이틀은 필수로 작성하되 바디와 푸터는 옵션입니다.


```
type: Contents

body

footer
```

## 2. Type
- feat: 새로운 기능 추가 (코드 추가)
- fix: 버그 수정 (에러 수정)
- refactor: 코드 리팩토링 (코드 개선)
- docs: 문서 수정
- style: css, sass 추가 및 수정
- chore: 빌드 업무 수정, 모듈 수정, 패키지 매니저 수정

## 3. Contents
- 과거시제를 사용하지 않고 명령어로 작성합니다.
    - Fix
    - Add
    - Update
    - Delete

## 4. Body
- 선택사항 입니다. 
- 부연설명이 필요하거나 커밋 이유를 설명할 경우 작성합니다.

## 5. Footer
- 선택사항 입니다.
- issue tracker id를 작성할 때 사용합니다.



# GitBash Command
- commit 상태 확인: `$git status`
- commit 목록 확인: `$ git log`
- commit message 변경: `$ git commit --amend`
- commit 취소 후 staged: `$ git reset --soft HEAD^`
- commit 취소 후 unstaged
    - 첫번째 방법: `$ git reset --mixed HEAD^`
    - 두번째 방법: `$ git reset HEAD^`
<br>

- 작업 staging: `$ git add *`
- 선택한 파일 unstaging: `$ git reset HEAD filename`



---
아래 사이트를 참조해 작성된 글입니다.
- https://meetup.toast.com/posts/106
- https://doublesprogramming.tistory.com/256
- https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html
- https://byseop.netlify.com/react-todolist01/