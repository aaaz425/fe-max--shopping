# 🍀 CodeSquad_Masters-FE_max

## **📝 아마존_shopping**

### **✅ 체크 리스트**

- 상단 네비게이션바 (Header)
  - [X] 가로 사이즈의 크기를 조정한다
  - 로그인 버튼
    - [X] 진입 1초 후 레이어를 추가하고, 애니메이션 기능을 구현한다
    - [X] 호버하면 레이어를 확장하고, 배경을 딤 처리한다
  - 배송처 영역
    - [X] 호버하면 레이어를 표시하고, 배경을 딤 처리한다
  - [X] 각 호버 영역 및 레이어 영역을 벗어날 시 모든 효과를 제거한다
  - 검색바
    - [X] placeholder 기능을 구현한다
    - 클릭시
      - [X] 추천 검색어(10개)가 표시된 레이어를 표시하고, 배경을 딤 처리한다
      - [ ] 키보드의 위, 아래 화살표 키를 통해 추천 검색어 목록을 이동하고, 배경색을 통해 포커싱된 목록을 표시한다
    - 입력시
      - [ ] 실시간 자동 완성(10개)이 표시된 레이어를 표시하지만, 요소 선택 시 실제로 화면 이동은 하지 않는다
      - [ ] 키보드의 위, 아래 화살표 키를 통해 추천 검색어 목록을 이동하고, 배경색을 통해 포커싱된 목록을 표시한다
    - 검색 내역
      - [ ] 최대 5개 까지 표시한다
      - [ ] X버튼을 눌러 목록에서 제거한다
      - [X] 아래로는 추천 검색어를 계속해서 표시한다
      - [ ] 키보드의 위, 아래 화살표 키를 통해 추천 검색어 목록을 이동하고, 배경색을 통해 포커싱된 목록을 표시한다
- 사이드바 (Aside)
  - [ ] 상단바의 (모두)버튼을 누르면 화면 좌측에서 애니메이션과 함께 표시한다
  - [X] X버튼 또는 외부 영역 클릭시 사이드바를 화면에서 제거한다
  - [X] 로그인 버튼, 각 카테고리 항목은 클릭해도 실제로 작동 하지 않는다
  - [ ] 호버시에 배경색과 아이콘색 변화 효과를 추가한다
  - [ ] (모두 보기) 클릭시 접혀 있는 카테고리를 펼치는 애니메이션을 추가한다
  - [ ] (간단히 보기) 클릭시 카테고리를 접는 애니메이션을 추가한다
  - 부서별 쇼핑
    - [ ] 카테고리 클릭시 우측에서 좌측으로 이동하는 애니메이션을 추가한다
    - [X] 카테고리 클릭시 상세 카테고리 내역을 표시한다
    - [X] 돌아가기 항목을 추가한다
- 메인 페이지 (Main)
  - 히어로 영역
    - [X] 유한 슬라이더로 구현한다
    - [X] 무한 슬라이더로 구현한다
    - [X] 좌우 화살표를 통해 내용을 변경한다
    - [X] 화살표를 누르지 않으면, 10초마다 다음 내용으로 변경한다
  - 본문 콘텐츠 영역
    - [X] 이미지 사이즈에 따라 콘텐츠 높이를 다르게 적용한다
    - 로딩 인디케이터를 활용 한다
      - [ ] 메인 페이지에 진입했을 때
      - [ ] 스크롤을 내렸을 때
- [X] Footer

### **학습 및 구현사항 정리**

- [1주차 정리](READEME/week1.md)
- [2주차 정리](READEME/week2.md)
- [3주차 정리](READEME/week3.md)
- [4주차 정리](READEME/week4.md)

### **To litae**

- 미구현 상황 체크리스트
  - [ ] 최근 검색어 삭제 기능
  - [ ] 검색어 자동 완성 기능
  - [ ] 검색바 키워드 리스트 위아래 방향키 클릭 이벤트
  - [ ] 사이드바 처음 오픈 하는 메뉴 부분 클릭 타겟 문제
  - [ ] 사이드바 애니메이션
  - [ ] 히어로 영역 슬라이드 제이슨 서버 연결

- 미구현 상황 위에서부터 순서대로 우선 순위입니다
- 검색어 자동 완성 기능은 가능하다면 keyword 폴더의 view, model, controller 파일에서 구현 부탁드립니다
- 나머지 기능들이나 코드 스타일 같은 것들은 정말 편하게 리태 스타일대로 하셔도 될 것 같습니다
- 너무 애매하다 싶은 부분은 언제든지 여쭤봐주세요~
