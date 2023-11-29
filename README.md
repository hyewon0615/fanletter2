### 팬레터 만들기

props-drilling-> context -> redux순으로 기능구현하기

### component구성

Header => title , 분류버튼
Form => 편지 추가
letterBox => letters정렬
letters => data Read
Footer => 장식

### Router page

Home => 전체 컴포넌트를 가짐 (LetterBox에 하위요소인 Letters 제외)
detail => data에서 선택한 카드와 일치한 아이디를 가진 데이터로 상세페이지를 읽어냄

### 네이밍 문법

module을 제외하고 camelCase 이용하기

### 수정이 필요한 부분

#### Header 버튼 활성화 시 색 변하는 로직 리팩토링 필요

버튼 별 state 선언 후 set으로 변경했으나 하드코딩인듯

#### layout 을 활용해서 리렌더링 줄이기

Header에서 버튼을 따로 빼서 Header와 Footer를 layout으로 감싸 children 을 이용하면 좋을 듯하다.

#### 불필요한 렌더링

아직 뭐가 불필요한 렌더링인지 모르겠다. 그래서 useCallback이라던가 메모리제이션을 제대로 활용을 못한다.
