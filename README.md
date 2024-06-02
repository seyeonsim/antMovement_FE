# 개미운동
초보 투자자들을 위한 경제 및 주식 공부를 지원하고, 실전 모의 투자 경험을 제공하는 종합 웹 플랫폼

<br />

> 📅 개발 기간 : 2024. 01. 15 ~ 2024. 02. 05

<br /><br /><br />

## 개발 팀 소개

| 이름 | 역할 |  |
| --- | --- | --- |
| [기원희](https://github.com/wonheeki) | 풀스택 | - 메인 페이지 <br> - 회원가입 <br> &nbsp;&nbsp;&nbsp;- 유효성 검사 <br> - 일반 로그인 <br> - 주식 길잡이 <br> - 단어장 |
| [심세연](https://github.com/seyeonsim) | 풀스택 | - 뉴스룸 <br> &nbsp;&nbsp;&nbsp;- 로딩창 <br> &nbsp;&nbsp;&nbsp;- 시사 경제 용어 의미 확인 <br> &nbsp;&nbsp;&nbsp;- 형광펜 <br> &nbsp;&nbsp;&nbsp;- 시사 경제 용어 저장, 뉴스 스크랩 <br>- 뉴스 크롤링 구조 수정(줄바꿈 적용)|
| [최진](https://github.com/nwejin) | 풀스택 | - 개미의 시선(커뮤니티) <br> - 관리자 페이지 <br> - 모의투자 css  |
| [최예지](https://github.com/I00jey) | 백엔드 | - 카카오 소셜 로그인 <br> - 뉴스 크롤링 <br> - 관리자 식별 <br> - 서버 배포|
| [최용헌](https://github.com/dydgjs200) | 백엔드 | - 주식 길잡이(모의투자) <br> - 커뮤니티 게시글 논리 삭제, 물리 삭제 |

<br /><br /><br />

## 기술 스택

### Front-end
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">

  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
   <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=.env&logoColor=white">
</div>


### Back-end
<div>
 <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
 <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
 <img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=.env&logoColor=white">

 <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
 <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
 <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2s&logoColor=white">
  <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">
</div>


### DataBase
<div>
 <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=mongoDB&logoColor=white"> 
 <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
</div>


### Cooperation Tools
<div>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notions&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>


<br /><br /><br />

## 주요 기능

### 📰 뉴스룸

| 기능 | |
| --- | --- |
| 주제별 뉴스 확인, 최신 뉴스 불러오기 | ![뉴스룸과 로딩](https://github.com/seyeonsim/antMovement_FE/assets/148730784/5db5c6af-8c72-4bcb-874d-ec35249c30cc) |
| 시사 경제 용어 의미 확인 | ![단어 모달](https://github.com/seyeonsim/antMovement_FE/assets/148730784/85797323-6329-42c0-8d24-83b61fdaab16) |
| 형광펜 | ![형광펜](https://github.com/seyeonsim/antMovement_FE/assets/148730784/59e76257-9227-41b4-94dc-2f83c7d23e6c) |
| 스크랩 | ![뉴스 스크랩](https://github.com/seyeonsim/antMovement_FE/assets/148730784/971105e3-bb23-4dc6-8e7b-3ca7dd2b8bb2) |
| 단어장과 뉴스 스크랩 | ![단어장과 스크랩](https://github.com/seyeonsim/antMovement_FE/assets/148730784/3163be18-b95c-443b-95ed-a76ac64ff794) |

<br /><br />

### 📈 주식 길잡이
| 기능 | |
| --- | --- |
| 실제 주식 차트 위젯 & 실제와 유사한 호가창 구현 및 설명 제공 | ![주식길잡이 호가창](https://github.com/seyeonsim/antMovement_FE/assets/148730784/5202189b-11a2-47cb-90d4-dee9057dccc0) |
| 기업 정보 | <img width="1728" alt="주식 길잡이 기업정보" src="https://github.com/seyeonsim/antMovement_FE/assets/148730784/698c7902-814b-4ebc-901f-09a254c5a2e4"> |
| 모의 투자 : Bybit API를 활용한 모의 투자 기능, 결과와 랭킹 확인 가능 | ![모의투자 게임](https://github.com/seyeonsim/antMovement_FE/assets/148730784/ef746ead-73d0-4573-82ec-97c1288cf394) ![주식 길잡이 모의투자 결과](https://github.com/seyeonsim/antMovement_FE/assets/148730784/b372b054-cf37-4c9c-9f22-32baac8e653d) |

<br /><br />

### 💻 개미의 시선
| 기능 | |
| --- | --- |
| 커뮤니티 게시글 CRUD | |
| 댓글, 대댓글 | |
| 게시글 검색| | |
| 인기글(좋아요) | |

<br /><br /><br />
