# SHINNJIWOONG.COM 

## 프로젝트 개요 / Project Overview
https://user-images.githubusercontent.com/109443641/221835931-5b10014a-f9d3-4ba8-b0ea-2946e092b9e4.mp4

<br>
<a href="http://www.shinnjiwoong.com/">www.shinnjiwoong.com</a> <br><br>

#### 프로젝트 컨셉 / Project Concept 
2019년을 기점으로 하여 지금까지의 음악 및 웹 개발 작업물들을 정리해놓은 포트폴리오 웹사이트.
<br>

#### 프로젝트 참여역할 / Project Scope
- 프로젝트 기획
- 프로젝트 디자인
- 프로젝트 개발 

#### 프로젝트 개발기간 / Project Development Period
2022.12 ~ 2023.02

#### 프로젝트 개발언어 / Project Development Language
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">

#### 사용된 폰트 / Used Fonts
1. <a href="https://noonnu.cc/font_page/412">조선가는고딕</a>
2. <a href="https://noonnu.cc/font_page/412">레페리포인트 Oblique</a>
3. <a href="https://fonts.google.com/specimen/Roboto">Roboto</a>


---


 ## 프로젝트 디테일 / Project Details
 
 ### 프로젝트 달성 목표 / Goals
  #### 이 프로젝트를 통해서 달성하고 싶었던 목표
  - 외부의 라이브러리 없이 __순수한 자바스크립트 코드__ 로만 제작한다.
  - 디자인적으로 최대한 덜어내고, __군더더기 없이 꼭 필요한 정보로만으로__ 흥미로운 웹사이트를 구성한다.


 ### 프로젝트 특성 / Features 
  #### 4분할 화면
  - 프로젝트를 처음 구상했을 때, 모니터에 떠오른 빈 웹사이트 화면이 마치 명함처럼 보여서 하나의 커다란 명함을 생각하며 첫 컨셉을 떠올렸다. <br>
  <img width="300" alt="business card" src="https://user-images.githubusercontent.com/109443641/224520510-1c73902c-a951-40cd-b506-4682a01f70dd.png"> <br>(example image from https://gdbot.tumblr.com/post/163862543763/futurefurthur-austin-redman)
  - 명함이라는 컨셉으로 개발을 하면서, 하나의 큰 화면을 4분할하여 4개의 명함 사이즈 화면으로 각각 다른 포트폴리오를 보여주면 좋겠다는 생각으로 발전되었고, 현재의 디자인으로 최종확정 되었다.
  #### 클릭 인터랙션
  - 웹사이트를 최대한 정적인 모습으로 구현하고자 하는 목표가 있었는데, 이에 의해서 전체적으로 웹사이트를 둘러보는 과정이 지루하다는 문제가 생겼다.
  - 이를 조금 보완하기 위해서, 사용자가 클릭을 진행할 때마다 4분할된 화면의 색이 바뀌는 동적 요소를 추가했다. 
  - 바뀌는 색은 처음에 완전한 임의의 색으로 지정하는 방식으로 구현했으나, luminosity 값이 낮은 색이 설정되었을 때 텍스트와 버튼이 잘 보이지 않는 경우가 생겨, 일정 값 이상의 luminosity를 가지는 색 범위 안에서 임의로 설정되도록 구현했다.
  #### 음악 
  - 정적인 웹사이트에서 느껴질 수 있는 지루함을 보완하기 위한 두번째 도구로 직접 제작한 음악이 재생되도록 구현했다.
  - 음악은 리듬감이 확실한 장르로 제작하여 정적인 분위기의 웹사이트를 둘러보는 동안에 조금 더 생동감 있는 경험을 만들고자 했다.

 ### 구현 화면 / Project Screens
<img width="1000" alt="IMG__SJW_1" src="https://user-images.githubusercontent.com/109443641/221836350-9a5d50ed-ce97-47ee-a4b8-5c88602cc804.png"><img width="1000" alt="IMG__SJW_3" src="https://user-images.githubusercontent.com/109443641/221836421-f85ecc51-dbaf-4380-9d7e-c39d23416e4c.png">

<img width="1000" alt="IMG__SJW_3" src="https://user-images.githubusercontent.com/109443641/221836361-91791588-c277-4c31-852c-2b7931ad50bd.png"><img width="1000" alt="IMG__SJW_4" src="https://user-images.githubusercontent.com/109443641/221836364-ccef6d3a-9757-4c2b-8e81-667755c585ff.png">

--- 

 ## 프로젝트 리뷰 / Project Review
 
 ### 개선사항 / Improvements
 
 #### UI / UX
  - 사람들에게 테스팅을 부탁해보고 피드백을 받아서 수정하는 과정안에서, 개개인이 웹사이트를 받아들이는 난이도가 큰 차이를 보이는 것을 알 수 있었다. 컴퓨터를 익숙하게 다루는 사람들에게는 전체적인 웹사이트 흐름이 흥미롭게 느껴지는 경우도 있었지만, 그렇지 않은 경우에 웹사이트를 구경하는 데에 꽤 힘들어하는 경우도 있었다. 이 부분에서 컨셉을 유지하면서 웹사이트를 너무 불친절하지 않게 만드는 방식을 더 고민해봐야할 것 같다고 생각이 든다.
  
 #### 미디어 데이터 관련
  - 미디어 데이터가 로딩되는 시간이 오래 걸리는 경우가 있다. 웹사이트를 처음 들어갔을 때 모든 데이터를 로딩시키는 과정에서 꽤나 오랜 시간동안 공백이 발생하는 경우가 있었다. 이 부분에서 시간을 줄이기 위해 미디어 데이터 자체의 크기를 줄이는 시도를 했지만, 다른 방법이 있을지 더 생각해봐야할 것 같다. 
  - 미디어 데이터가 로딩되는 동안 로딩 화면이 뜨도록 개선할 필요가 있다고 생각이 든다. 
---
### 이번 프로젝트로 배운것 / Things I Learned 

#### 코드의 비동기적 처리과정
 - 현재의 화면 상태에 따라 어떤 처리를 진행하고자 할 때, 코드를 비동기적으로 실행함으로서 올바른 현재 Status 값을 받아와 넘겨주는 과정을 통해서 비동기적 코드 처리에 관한 필요성과 중요성을 더 느낄 수 있었다. 
 - async/await를 실습할 수 있었다. 

#### Media-query
 - 다양한 사이즈의 화면에 대응하여 메인 디자인 컨셉을 어떻게 활용할지에 대한 고민을 할 수 있었다. 
 - 미디어쿼리 대응에 대한 실습을 할 수 있었다. 
 
#### Interaction
 - CSS와 Vanilla JS를 통해 여러가지 인터랙션 요소들을 만들어보는 좋은 경험이 되었다. 

#### 웹 배포
 - 외부의 패키지를 사용하지 않고 오로지 HTML,CSS, JS만을 사용하여 배포과정이 간단했지만, 유료 도메인을 구입하여 처음으로 웹 사이트를 다른 사람들에게 배포할 수 있는 경험이 되었다. 


### 기타 생각들 / Thoughts
 - 이번 프로젝트는 UX적 측면에서 생각을 많이 하게 된 프로젝트였다. 개개인마다 어떤 것을 받아들이는 방식은 너무도 다르다. 하지만, 동시에 대부분의 사람들이 받아들이는 동일한 어떤 '느낌'은 존재하는 것 같다. 
개발자로서, 이러한 부분을 미리 예상하고 사용자 경험 과정을 설계하는 것이 필요하겠다. 

 - 어떤 요소에 마우스를 올리는 행위를 진행했을 때 그 요소가 어떤 방식으로던 반응을 하면 사람들은 무심코 클릭하게 된다. 이때 그 요소가 클릭에 대한 반응을 하지 않으면, 사용자의 기대감을 떨어뜨리는 계기가 되는 것 같다. 이러한 부분은 웹사이트를 주변인들에게 보여주고 피드백 받는 과정이 없었다면 빠르게 캐치하기 힘든 부분이었다. 프로젝트에 대한 피드백이 중요하다는 점과 더불어 반응하는 요소를 만들때에 사용자를 헷갈리게 하지 않도록 필요한 부분에만 넣는 과정이 필요할 것으로 보인다.
 
 - 사용자가 어떤 요소를 클릭하거나 호버하는 행위를 했을때, 본인이 지금 제대로 인터랙션을 하고 있는지에 대한 확실한 피드백을 제공해줘야한다. 이를 위해서는 사용자가 보고자 하는 내용이 명확히 있을때 (예를 들어, 어떤 아이템을 클릭해서 디테일한 정보를 얻고자 하는 경우.) 그 내용에 집중할 수 있도록 웹사이트가 환경을 제공해줘야한다. 

 - 프로젝트를 진행하는 과정에서 중간중간 덜어낼 것은 없는지를 생각해보는 시간을 가져야할 것 같다. 욕심이 많으면 무아지경으로 요소들을 추가하고 배치하게 되는 경향이 있는 것 같은데, 그걸 중간중간 찾아내지 않으면 사용자 입장에서 혼돈스러운 웹사이트를 만들기 쉽상이다. 보여주고 싶은 것들이 많을 때, 그걸 한걸음 뒤에서 전체적으로 바라보고 덜어내고 절제하는 연습도 필요할 것으로 보인다. 

## 읽어주셔서 감사합니다!
