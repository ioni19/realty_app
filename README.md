# 부동부동 앱 클론 프로젝트

## 프로젝트 설명



- 빅데이터 기반 개인 맞춤형 부동산 솔루션 제공 어플 부동부동 클론 프로젝트입니다.
- `소셜로그인` → `검색` → `상세정보` 플로우에 따라 구현했습니다.

## 스크린샷



| 소셜 로그인 | 제품 리스트 | 검색 | 상세화면 |
| --- | --- | --- | --- |
| ![](https://user-images.githubusercontent.com/108667570/212835131-d8df953f-5bdf-42ae-9a42-59b57ecac832.png) | ![](https://user-images.githubusercontent.com/108667570/212835753-f0e79030-1593-4715-a0cc-0aaadf80fd31.png) | ![](https://user-images.githubusercontent.com/108667570/212835761-3dbf7d26-48c1-4d99-8c20-dd77e5ea4c05.png) | ![](https://user-images.githubusercontent.com/108667570/212835767-7f039198-fcc6-4b42-aab9-18b7f435603c.png) |

[➡️ 데모 영상 바로가기](https://www.youtube.com/watch?v=UYr8SgYGY3E)

## 사용 기술



> HTML
> 

> CSS
> 

> JavaScript
> 

> Styled-components
> 

> React-Native
> 

> Firestore
> 

## 프로젝트 환경



> [Node.js > 14](https://nodejs.org/) and npm
> 

> [Watchman](https://facebook.github.io/watchman)
> 

> [Xcode 14](https://developer.apple.com/xcode)
> 

> [Cocoapods 1.11.3](https://cocoapods.org/)
> 

## 실행 방법



1. 프로젝트 실행을 위해 Node.js, cocoapods, React Native Cli, Xcode가 설치되어있어야합니다. 
[설치 방법 참고](https://reactnative.dev/docs/environment-setup)
2. 레포지토리를 다운 받아주세요.

 `git clone https://github.com/ioni19/realty_app.git`

1. `realty_app` 내 ios 폴더로 이동 후 dependencies를 설치해주세요.

```jsx
cd ios 
pod install
cd ..
```

1. 다음 명령어를 이용해 server를 실행해주세요.

```jsx
npm run start
```

5. 다음 명령어를 이용해 simulator를 실행해주세요.

```jsx
npm run ios
```

## 폴더 구조



```
app
 ┣ components
 ┃ ┣ Detail
 ┃ ┃ ┣ infoByField
 ┃ ┃ ┃ ┣ InfoByField.js
 ┃ ┃ ┃ ┗ RadarChart.js
 ┃ ┃ ┣ BasicInfo.js
 ┃ ┃ ┣ BottomBtn.js
 ┃ ┃ ┣ Contact.js
 ┃ ┃ ┣ ItemScore.js
 ┃ ┃ ┣ Predicion.js
 ┃ ┃ ┣ PriceInfo.js
 ┃ ┃ ┣ Ranking.js
 ┃ ┃ ┣ RecHouse.js
 ┃ ┃ ┣ Report.js
 ┃ ┃ ┣ SaleInfo.js
 ┃ ┃ ┣ SpaceSelectModal.js
 ┃ ┃ ┗ TextToggle.js
 ┃ ┣ Card.js
 ┃ ┣ SearchBar.js
 ┃ ┣ SearchModal.js
 ┃ ┣ SocialLogin.js
 ┃ ┗ Swiper.js
 ┣ lib
 ┃ ┣ card.js
 ┃ ┗ product.js
 ┣ mockData
 ┃ ┣ basicImg.js
 ┃ ┣ mockData.json
 ┃ ┣ productData.js
 ┃ ┣ recHouseData.js
 ┃ ┣ reportData.js
 ┃ ┣ saleInfoData.js
 ┃ ┗ widthTypeData.js
 ┣ navigators
 ┃ ┣ Root.js
 ┃ ┣ Stack.js
 ┃ ┗ Tabs.js
 ┣ screens
 ┃ ┣ Detail.js
 ┃ ┣ Home.js
 ┃ ┣ InReady.js
 ┃ ┣ Login.js
 ┃ ┣ My.js
 ┃ ┣ Prescription.js
 ┃ ┣ Report.js
 ┃ ┣ Search copy.js
 ┃ ┗ Search.js
 ┣ theme
 ┃ ┗ theme.js
 ┗ .DS_Store
assets
 ┣ icons
 ┣ images
 ┗ .DS_Store
```

- app : 코드가 담겨있는 메인 폴더.
    - components : 각 스크린에서 사용하는 컴포넌트 폴더.
        - Detail
        - Card.js
        - SocialLogin.js
        - 생략
    - lib: firestore 통신 관련 함수.
    - mockData : 테스트를 위한 목데이터.
    - navigators : 화면 전환 기능을 위한 네비게이터.
    - screens : 사용자가 이용하게 되는 화면 단위의 스크린.
    - theme : 공통 style 데이터.
- assets : 아이콘 및 이미지.
