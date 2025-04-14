import { create } from "zustand";
interface Title {
    direction: string; //제작 방향?(ex. 웹사이트 제작)
    client: string; //클라이언트
}
interface Information {
    working: string; //작업기간
    contribution: number; //기여도
    person: number; //작업인원
    scope: string; //작업범위
    how: string; //작업방식
    tool: string[]; //작업 툴
    library: string[]; //작업 툴
    isView: boolean; //자세한 내용
}
export interface Detail {
    siteImage: string[]; //이미지
    codeImage: string[]; //코드 이미지
    title: string; //타이틀
    contentText: string; //텍스트
    isSlide: boolean; //슬라이드 여부
}
interface DataContent {
    title: Title;
    liveLink: string; //외부 링크(만든 사이트로 이동)
    information: Information;
    detail: Detail[];
}
interface DataList {
    list: DataContent[];
    isViewToggle: (index: number) => void;
    isViewAllRemove: () => void;
}

const useDataStore = create<DataList>((set) => {
    return {
        list: [
            {
                title: {
                    direction: "홈페이지 제작",
                    client: "전자 기기 소개",
                },
                liveLink: "test1", //입력 필
                information: {
                    working: "2023. 05. 15 ~ 06. 09(20일)",
                    contribution: 100,
                    person: 1,
                    scope: "반응형",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JavaScript", "JQuery"],
                    library: ["Swiper", "Zustand"], //입력 필
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "CANVAS 태그 반응형 분기 처리",
                        contentText: "한 태그에서 분기점을 기준으로 다른 이미지를 출력할 수 있도록 지정하고, canvas 태그 밑에 깔아둔 img태그의 너비와 높이값을 가져와 페이지 접속 시 원활하게 이미지 조정이 될 수 있도록 작업 하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "CANVAS 태그 스크롤 액션 처리",
                        contentText: "영상을 스크롤에 엮은 것처럼 구현하기 위해서 전체 움직일만큼의 영역의 진행율을 구하고 requestAnimationFrame함수를 사용하여 분기별로 받은 이미지를 스크롤할 때마다 업데이트되도록 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "모바일에서 팝업 드래그 시 위치 이동하면서 화면 변경되는 기능 개발",
                        contentText: "모바일, 데스크탑에 어느 한 쪽에 국한되지 않고 기능 자체를 함수로 작업해두면 사용할 수 있도록 초안을 잡았고, 움직이는 상단 팝업을 각 화면에서 보이는 것 기준으로 prev, active, next로 잡고 index값을 조정하는 방식으로 작업하였습니다. 움직일 때마다 각 index값에 class값을 초기화하고 다시 붙이는 방식이고, class가 변경될 때마다 해당 값에 있는 css로 위치 조정될 수 있도록 하였습니다. css의 transition은 .6s로 설정되어있어 애니메이션이 끝나기 전에 기능이 중첩되어 적용되지 않도록 변수 isDragging에 boolean타입을 할당하여 애니메이션이 시작되면 true로, 끝나면 false로 변경되도록 작업하였습니다. 또, 모바일에서는 touch하나의 이벤트로 기능을 작업하기엔 한계가 있어 touchstart, touchmove, touchend 이벤트를 사용하였습니다 start : 1. 페이지 진입  stop값이 있는 지 확인하고 있다면 stop class값을 제거하면서 isDragging의 값을 true로 바꿔주었습니다. 2. 그  보통 진입 시를 제외하면 touchend이벤트가 끝난 이후이므로 setTimeout함수를 사용하여 .6s초 이후에 isDragging값을 true로 변경해주며 다시 애니메이션이 시작될 수 있도록 하였습니다. move : 사용자가 드래그를 어느 방향에서 시작하여 끝났는지 알 수 있는 부분으로 해당 부분에서 나온 값을 end로 보내주었습니다 end : move에서 나온 값을 토대로 해당 값을 Math.sign메서드를 사용하여 정수로 반환하고, 음수인지 양수인지에 따라 exploreLcdRotate()함수가 실행될 수 있도록 하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "모바일에서 팝업 드래그 시 위치 이동하면서 화면 변경되는 기능 개발",
                        contentText: "단순 이미지가 전환되는 기능으로 첫 화면에서 버튼 클릭 시 css로 두번째 이미지로 자연스럽게 변경될 수 있도록 작업하였습니다. 본 프로젝트의 경우 인트로에 굉장히 많은 이미지가 들어가기 때문에 다른 부분은 움직임을 최소화하면서도 자연스러움을 포인트로 잡았습니다. 1. 첫 화면 첫 화면에서 버튼을 클릭하게 되면 화면을 감싸고 있는 태그에 해당 버튼의 이름이 붙게 되는데 이 이름을 활용하여 두 번째 화면에서 기능을 작동할 때에도 연계되도록 작업하였고, 해당 태그에 두 개 이상 태그가 붙을 시 class를 모두 초기화하고 마지막에 클릭한 버튼의 class만 남도록 하였습니다. 첫 화면의 버튼과 두 번째 화면의 내용이 동일하도록 클릭 시 index값을 가져오고 slick라이브러리 내에 있는 slickGoTo메서드를 사용하여 이동되도록 작업하였습니다. 2. 두 번째 화면 첫 화면에서 버튼을 클릭하고 나오는 팝업이 있는 두번째 화면은 팝업 내에 있는 제목 및 내용을 slick 라이브러리를 사용하여 좌, 우 버튼 클릭 시 동시에 움직일 수 있도록 asNavFor를 사용하여 연결해주었습니다. 상단에 노출되는 이미지는 팝업의 제목 slick에서 active되는 태그 내의 data-slick-index 값을 가져와 해당 이미지에 active class가 붙도록 작업해주었습니다. 또한, 첫 화면과 두 번째 화면의 클릭하여 active한 index값이 다를 것을 고려하여 팝업의 좌, 우 화살표를 클릭했을 시 활성화된 index값을 가져와 첫 화면의 로직과 유사하게 버튼의 class 이름 일부를 추가하도록 하였습니다.",
                        isSlide: true,//입력 필
                    },
                ],
            },
            {
                title: {
                    direction: "홈페이지 리뉴얼",
                    client: "에너지 솔루션",
                },
                liveLink: "test1", //입력 필
                information: {
                    working: "2023. 05. 15 ~ 06. 09(20일)",
                    contribution: 40,
                    person: 4,
                    scope: "반응형",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JQuery"],
                    library: ["Swiper", "Zustand"], //입력 필
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "모션을 생각한 구조",
                        contentText: "기획에서 나온 모션의 흐름을 생각하고 작업자 외 타인이 보더라도 부드럽게 이어지도록 작업하기 위해서 최대한 같은 흐름의 모션은 동일 section태그 안에서 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "텍스트 그라데이션 CSS",
                        contentText: "추후에 수정이 원활하고 기획/디자인 단에서 잡아둔 모션처럼 최대한 부드럽게 진행될 수 있도록 텍스트를 감싸고 있는 태그에 background-image로 그라데이션 배경색을 깔고, background-clip:text/text-fill-color:transparent으로 깔아둔 그라데이션이 적용될 수 있도록 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "더 다채로운 모션을 위하여 Json 사용",
                        contentText: "Json파일은 벡터 파일로 애프터이펙트에서 작업한 파일을 뽑는 확장자이며 적은 용량으로 부드럽게 움직임을 구현할 수 있다는 장점이 있습니다. 따라서 HTML, CSS, Script로 구현하지 못하는 보다 더 부드러운 모션을 위하여 일부는 Json를 Lottie사용하여 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                ],
            },
            {
                title: {
                    direction: "랜딩 페이지 제작",
                    client: "게임 프로모션",
                },
                liveLink: "test1", //입력 필
                information: {
                    working: "2022. 12. 29 ~ 23. 01. 11(9일)",
                    contribution: 100,
                    person: 1,
                    scope: "적응형",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JQuery"],
                    library: ["Swiper", "Zustand"], //입력 필
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "적절한 태그 사용",
                        contentText: "heading 태그 중 하나인 h1은 각 페이지 당 한 개를 삽입하게 되는데 이 때, 페이지의 주제를 주로 삽입합니다. 해당 내용과 회사 컨벤션에 맞도록 작업한 게임 프로모션의 로고를 h1태그를 사용하여 삽입하였습니다. 그 다음으로 해당 section에 중요도에 맞게 각 텍스트 태그에 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["", "", ""],//입력 필
                        codeImage: ["", "", ""],//입력 필
                        title: "동일 동작 스크립트",
                        contentText: "변수 headerItem와 scrollUpItem이 지칭하는 각 요소에 어떠한 애니메이션이나 동작을 주기 위하여 각 section과 scrollUpItem를 each문으로 돌려 배열에 각 시작점을 넣어줍니다. 같은 동작을 요소 갯수만큼 반복문으로 돌려주고 조건문으로 이전에 배열에 담아준 요소의 시작점에 viewport가 닿게되면 실행하도록 작업하였습니다. section 시작점에 맞춰 작동하는 것은 상단의 메뉴이고, scrollUpItem은 각 섹션 안에 있는 요소들 중 시작점에 닿게 되면 opacity0에서 1로, transform:translateY(150px)에서 0으로 작동하는 애니메이션인데 두 가지 모두 scroll 이벤트할 때 작동되고, 특정 갯수만큼 동일한 액션을 하기 때문에 같은 함수로 작업하여 scroll 이벤트 및 페이지 진입 시 작동하도록 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                ],
            },
            {
                title: {
                    direction: "하이브리드 앱 제작",
                    client: "골프 플랫폼",
                },
                liveLink: "test1", //입력 필
                information: {
                    working: "2022. 07. 27 ~ 08. 26(23일)",
                    contribution: 40,
                    person: 2,
                    scope: "모바일",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JavaScript", "JQuery",],
                    library: ["Swiper", "Zustand"], //입력 필
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["image01"],//입력 필
                        codeImage: [],//입력 필
                        title: "자주 사용하는 샘플본 선 제작",
                        contentText: "본 프로젝트에서 사용되는 input 및 일부 스타일이 동일하게 쓰여지는 부분이 많고, 한 명이 단독으로 진행하는 것이 아닌 만큼 통일된 스타일을 위하여 자주 사용되는 태그들을 한 페이지에 샘플 작업하여 다른 사람이 진행해도 스타일이 틀어지지 않게끔 선작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["image01"],//입력 필
                        codeImage: [],//입력 필
                        title: "퍼블 이후까지 고려한 작업",
                        contentText: "선 하드코딩 작업 후 개발하는 일정이었고, 실시간 소통보다 각 팀에서 기획을 보며 진행하는 상황이었습니다. 그래서 당시 각 html파일 안에 디자인과 동일한 코드 한 벌과 해당 섹션에 삽입되는 상태 종류 샘플 한 벌을 주석 처리해두어 추가 요청 사항이 있지 않더라도 개발 진행할 수 있도록 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                    {
                        siteImage: ["image01"],//입력 필
                        codeImage: [],//입력 필
                        title: "다양한 액션 적용 범위에 따른 스크립트 작성",
                        contentText: "기획 및 디자인단에서 요청한 여러가지 상황에 하나의 코드가 올바르게 작동되도록 스크립트 작업하였습니다.",
                        isSlide: true,//입력 필
                    },
                ],
            },
            {
                title: {
                    direction: "캠페인 랜딩페이지 제작",
                    client: "MSF",
                },
                liveLink: "test1", //입력 필
                information: {
                    working: "2022. 08. 22 ~ 06. 10(7일)",
                    contribution: 50,
                    person: 2,
                    scope: "적응형",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JQuery"],
                    library: ["Swiper", "Zustand"], //입력 필
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["image01", "image02"], //입력 필
                        codeImage: [], //입력 필
                        title: "페이지 진입 시 나타나는 라인 요소",
                        contentText: "비주얼 섹션에서 좀 더 인터렉션한 임펙트를 주고자 데코 요소 베이스로 쓰인 svg를 삽입하여 stroke-dashoffset값으로 진입 시 애니메이션이 실행되도록 작업하였습니다.",
                        isSlide: true, //입력 필
                    },
                    {
                        siteImage: ["image01", "image02", "image03"], //입력 필
                        codeImage: [], //입력 필
                        title: "section2진입 시 차례로 나타나는 애니메이션",
                        contentText: "홈페이지 구조를 section으로 나누고, 각 section의 offset.Top값을 배열에 담아 조건문으로 페이지의 section 갯수를 계산, window.scrollTop값이 배열에 담아둔 section.offset.Top값을 지났을 때 실행되도록 베이스를 잡고 진행했습니다.",
                        isSlide: true, //입력 필
                    },
                ],
            },
        ],
        isViewToggle: (index: number) =>
            set((state) => {
                const copy = [...state.list];
                copy[index].information.isView = !copy[index].information.isView;
                return { list: copy };
            }),
        isViewAllRemove: () =>
            set((state) => {
                const copy = [...state.list];
                copy.map(function (element) {
                    return (element.information.isView = false);
                });
                return { list: copy };
            }),
    };
});
export default useDataStore;
