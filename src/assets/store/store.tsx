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
interface Detail {
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
}

const useDataStore = create<DataList>(() => ({
    list: [
        {
            title: {
                direction: "웹사이트 제작01",
                client: "클라이언트",
            },
            liveLink: "test1",
            information: {
                working: "22.03.26~05.17(18일)",
                contribution: 50,
                person: 1,
                scope: "적응형",
                how: "하드코딩",
                tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                library: ["Swiper", "Zustand"],
                isView: false,
            },
            detail: [
                {
                    siteImage: ["", "", ""],
                    codeImage: ["", "", ""],
                    title: "",
                    contentText: "",
                    isSlide: true,
                },
            ],
        },
        {
            title: {
                direction: "웹사이트 제작02",
                client: "클라이언트",
            },
            liveLink: "test1",
            information: {
                working: "22.03.26~05.17(18일)",
                contribution: 50,
                person: 1,
                scope: "적응형",
                how: "하드코딩",
                tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                library: ["Swiper", "Zustand"],
                isView: false,
            },
            detail: [
                {
                    siteImage: ["", "", ""],
                    codeImage: ["", "", ""],
                    title: "",
                    contentText: "",
                    isSlide: true,
                },
            ],
        },
        {
            title: {
                direction: "웹사이트 제작03",
                client: "클라이언트",
            },
            liveLink: "test1",
            information: {
                working: "22.03.26~05.17(18일)",
                contribution: 50,
                person: 1,
                scope: "적응형",
                how: "하드코딩",
                tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                library: ["Swiper", "Zustand"],
                isView: false,
            },
            detail: [
                {
                    siteImage: ["", "", ""],
                    codeImage: ["", "", ""],
                    title: "",
                    contentText: "",
                    isSlide: true,
                },
            ],
        },
        {
            title: {
                direction: "웹사이트 제작04",
                client: "클라이언트",
            },
            liveLink: "test1",
            information: {
                working: "22.03.26~05.17(18일)",
                contribution: 50,
                person: 1,
                scope: "적응형",
                how: "하드코딩",
                tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                library: ["Swiper", "Zustand"],
                isView: false,
            },
            detail: [
                {
                    siteImage: ["", "", ""],
                    codeImage: ["", "", ""],
                    title: "",
                    contentText: "",
                    isSlide: true,
                },
            ],
        },
    ],
}));

/*const useDataStore = create(() => {
    return {
        list: [
            {
                title: {
                    direction: "웹사이트 제작",
                    client: "클라이언트",
                },
                liveLink: "test1",
                information: {
                    working: "22.03.26~05.17(18일)",
                    contribution: 50,
                    person: 1,
                    scope: "적응형",
                    how: "하드코딩",
                    tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                    library: ["Swiper", "Zustand"],
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["", "", ""],
                        codeImage: ["", "", ""],
                        title: "",
                        contentText: "",
                        isSlide: true,
                    },
                ],
            },
        ],
        /!*액션: () => {
            const state = get()
            const { 상태 } = state
            set({ 상태: 상태 + 1 })
        }*!/
    };
});*/
export default useDataStore;
