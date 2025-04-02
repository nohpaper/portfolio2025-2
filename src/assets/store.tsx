import { create } from 'zustand'
export const useDataStore = create(() => {
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
                    library:["Swiper", "Zustand"],
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
        ]
        /*액션: () => {
            const state = get()
            const { 상태 } = state
            set({ 상태: 상태 + 1 })
        }*/
    }
})