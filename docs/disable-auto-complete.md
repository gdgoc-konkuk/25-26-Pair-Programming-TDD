## 🚨 자동완성 임시 중지 🚨

이 프로젝트에서 구현하는 내용은 간단하며 TDD의 사이클을 전반적으로 학습하기 위해 사용됩니다.

따라서, TDD 원칙을 체험하는 실습 내용을 해칠 수 있는 자동완성 기능을 끄는 것을 강력히 권유드립니다.

### Cursor 자동완성 끄기

1. `Ctrl + Shift + P`를 눌러 명령 팔레트를 연 후 "Cursor Settings"를 엽니다.
2. 좌측에 `Tab` 메뉴를 선택한 뒤 `Cursor Tab`을 종료합니다.

![image](./cursor.png)

### Jebrains IDE(Intellij, PyCharm) 자동완성 끄기

`File` → `Settings` → `Editor` → `General` → `Code Completion`에서 `Show suggestions as you type` 옵션을 통해 컨트롤할 수 있다.

- 체크 박스 선택시 : 자동완성 켜짐
- 체크 박스 선택 해제 : 자동완성 꺼짐

![image](./jetbrains.png)

### VSCode 자동완성(코파일럿) 끄기

#### 설정에서 `Copilot` 자동완성 끄기

- `VSCode`에서 `Cmd + ,` (Mac) 또는 `Ctrl + ,` (Windows/Linux)로 설정창을 엽니다.
- 상단 검색창에 `copilot`이라고 입력해 관련 옵션을 찾습니다.
- `github.copilot.inlineSuggest.enable` 값을 `false`로 변경합니다.
  - `GUI` 환경에서는 해당 옵션의 체크박스를 해제하면 됩니다.
  - 혹은 `settings.json`에 아래 항목을 직접 추가할 수도 있습니다:
    ```json
    "github.copilot.inlineSuggest.enable": false
    ```
- 변경 후에는 `VSCode`를 재시작 하면 확실하게 적용됩니다.

#### 아이콘으로 직접 비활성화

- 인터페이스 하단 또는 상단에 있는 `Copilot` 아이콘(사람 두 명 또는 개구리 모양)을 클릭해서 `Code Completions` 또는 `자동완성 기능`을 끌 수 있습니다.
- 언어별로 끄고 싶으면 해당 언어 아이콘 옆에서 `Copilot` 옵션 메뉴를 열어 제안 기능을 `Off` 할 수 있습니다.

#### 확장 프로그램에서 비활성화

- `좌측 Extensions` 메뉴에서 `GitHub Copilot`을 선택한 뒤, `Extension` 설정에서 `Disable`하거나 특정 언어에만 활성화하도록 조절할 수 있습니다.
