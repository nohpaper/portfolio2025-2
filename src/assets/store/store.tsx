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
                        title: "detail TEST TITLE 01",
                        contentText: "detail TEST TITLE content text 01",
                        isSlide: true,
                    },
                    {
                        siteImage: ["", "", ""],
                        codeImage: ["", "", ""],
                        title: "detail TEST TITLE 01-2",
                        contentText: "detail TEST TITLE content text 01-2",
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
                    how: "리액트",
                    tool: ["HTML5", "SCSS", "JavaScript", "JQuery", "TypeScript", "REACT"],
                    library: ["Swiper", "Zustand"],
                    isView: false,
                },
                detail: [
                    {
                        siteImage: ["", "", ""],
                        codeImage: ["", "", ""],
                        title: "detail TEST TITLE 02",
                        contentText: "detail TEST TITLE content text 02",
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
                        title: "detail TEST TITLE 02",
                        contentText: "detail TEST TITLE content text 02",
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
                        title: "detail TEST TITLE 02",
                        contentText: "detail TEST TITLE content text 02",
                        isSlide: true,
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
