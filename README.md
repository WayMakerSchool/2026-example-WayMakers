# 🧭 WayMaker Todo

> 오늘 할 일을 적고, 끝내면 체크하고, 지울 수 있는 간단한 할 일 목록 웹앱이에요.

> [!TIP]
> **📚 이 저장소는 WayMakerSchool의 예시 프로젝트예요.**
> 내 프로젝트를 만들 때 이 저장소의 **README, 이슈, PR, 커밋 메시지**를 참고해서 따라 만들어 보세요.
> 아래 [👣 이 저장소처럼 만들어 보기](#-이-저장소처럼-만들어-보기)에 순서를 정리해 두었어요.

**🔗 배포 페이지**: https://waymakerschool.github.io/2026-example-WayMakers/

<br>

## 📖 프로젝트 소개

- **기간**: 2026.09.29 ~ 2026.09.29
- **프로젝트**: 2026 예시 프로젝트
- **소개**: 설치 없이 브라우저만 있으면 바로 쓸 수 있는 할 일 목록이에요. 새로고침해도 목록이 사라지지 않도록 브라우저 저장소(localStorage)에 저장해요.

<br>

## ✨ 주요 기능

| 기능 | 설명 |
| :-- | :-- |
| 할 일 추가 | 입력칸에 적고 `추가` 버튼이나 Enter를 누르면 추가돼요. |
| 완료 표시 | 할 일 글자를 누르면 줄이 그어지고, 다시 누르면 취소돼요. |
| 할 일 삭제 | `삭제` 버튼으로 지울 수 있어요. ([#1](../../issues/1) → [#3](../../pull/3)) |
| 자동 저장 | 새로고침하거나 창을 닫았다 열어도 목록이 그대로 남아 있어요. |

<br>

## 🛠 기술 스택

- **언어**: HTML, CSS, JavaScript
- **프레임워크 / 라이브러리**: 없음 (순수 JavaScript)
- **도구**: GitHub Pages (배포)

<br>

## 👥 팀원

| <img src="https://github.com/chefcoding.png" width="100"> |
| :--: |
| [Ethan](https://github.com/chefcoding) |
| 기획 · 개발 |

<br>

## ▶️ 실행 방법

```bash
# 1. 저장소 받기
git clone https://github.com/WayMakerSchool/2026-example-WayMakers.git

# 2. 폴더로 이동
cd 2026-example-WayMakers

# 3. index.html을 브라우저로 열기 (macOS)
open index.html
```

<br>

## 📁 폴더 구조

```
.
├── index.html    # 화면 구조
├── style.css     # 디자인
├── script.js     # 동작 (추가, 완료, 삭제, 저장)
├── .gitignore    # Git에 올리지 않을 파일 목록
└── README.md     # 지금 보고 있는 문서
```

<br>

## 🤝 협업 규칙

- **브랜치**: `main` ← `feat/기능이름`, `fix/버그이름`
- **커밋 메시지**: `feat: 로그인 기능 추가`, `fix: 버튼 클릭 오류 수정`, `docs: README 수정`

| 타입 | 언제 쓰나요? |
| :-- | :-- |
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `style` | 디자인(CSS) 변경, 코드 동작에는 영향 없음 |
| `docs` | 문서(README 등) 수정 |
| `chore` | 설정 파일 등 기타 작업 |

<br>

---

## 👣 이 저장소처럼 만들어 보기

### 1️⃣ 저장소 만들기

1. [readme-template](https://github.com/WayMakerSchool/readme-template)에서 **Use this template → Create a new repository**를 누르세요.
2. **Owner**는 `WayMakerSchool`, 이름은 규칙에 맞게 지어주세요. → `연도-프로젝트-팀이름` (예: `2026-web-Chefs`)
3. README의 빈칸을 우리 팀 내용으로 채워주세요.

### 2️⃣ 할 일을 이슈로 등록하기

1. **Issues → New issue**를 누르면 `✨ 기능 추가` / `🐞 버그 제보` 양식이 나와요.
2. 양식에 맞춰 무엇을 할지 적어주세요.
3. 👀 예시: [#1 할 일 삭제 기능](../../issues/1), [#2 공백 입력 버그](../../issues/2)

### 3️⃣ 브랜치를 만들어서 작업하기

`main`에서 바로 작업하지 말고, 기능마다 브랜치를 만들어요.

```bash
git switch -c feat/delete-todo     # 브랜치 만들고 이동
# ... 코드 작업 ...
git add .
git commit -m "feat: 할 일 삭제 버튼 추가 (#1)"
git push -u origin feat/delete-todo
```

> 💡 커밋 메시지 끝에 `(#1)`처럼 이슈 번호를 붙이면, 이슈 페이지에 커밋이 자동으로 연결돼요.

### 4️⃣ Pull Request(PR) 올리기

1. push하면 저장소에 **Compare & pull request** 버튼이 나타나요.
2. PR 양식이 자동으로 채워져요. 본문에 **`close #1`** 이라고 쓰면, 머지될 때 이슈 #1이 자동으로 닫혀요.
3. 팀원을 **Reviewers**로 지정하고, 리뷰를 받은 뒤 **Merge**해요.
4. 머지한 브랜치는 **Delete branch**로 정리해요.
5. 👀 예시: [#3 할 일 삭제 기능 추가](../../pull/3)

### 5️⃣ 배포하기 (웹 프로젝트라면)

**Settings → Pages → Branch: `main` / `(root)` → Save**를 누르면 몇 분 뒤 `https://waymakerschool.github.io/저장소이름/`에서 볼 수 있어요.

<br>

## 🙋 연습해 보기

[#2 공백만 입력해도 할 일이 추가돼요](../../issues/2)는 **연습용으로 남겨둔 버그**예요.
이 저장소를 **Fork**해서 직접 고쳐보고, 위의 3️⃣ ~ 4️⃣ 순서대로 PR까지 올려보세요!
