import { Card, View } from "./assets.tsx";
import useDataStore from "../assets/store/store.tsx";
import { useState } from "react";

interface CategoryItem {
    englishName: string;
    KoreanName: string;
    isActive: boolean;
}
type Category = CategoryItem;

/*TODO::
 * 1. view 타이틀에 뒤로 가기 아이콘 추가 및 타이틀 클릭 시 isView: false 되도록 작업
 * 2. 모바일용 작업 768 이하부터 vw로 작업
 * */
function Main() {
    const data = useDataStore((state) => state);
    const [category, setCategory] = useState<Category[]>([
        {
            englishName: "ALL",
            KoreanName: "전체",
            isActive: true,
        },
        {
            englishName: "HardCoding",
            KoreanName: "하드코딩",
            isActive: false,
        },
        {
            englishName: "React",
            KoreanName: "리액트",
            isActive: false,
        },
        {
            englishName: "TypeScript",
            KoreanName: "타입스크립트",
            isActive: false,
        },
    ]);
    /*const [widthSize, setWidthSize] = useState<number>(0);*/
    const activeCategory = category.find((element) => element.isActive);
    const activeContent = data.list.find((element) => element.information.isView);

    /*useEffect(() => {
        if (window.innerWidth > 0) {
            const handleResize = () => {
                setWidthSize(window.innerWidth);
            };

            // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
            window.addEventListener("resize", handleResize);

            // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
            handleResize();

            // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
            return () => window.removeEventListener("resize", handleResize);
        } else {
            return () =>
                window.removeEventListener("resize", () => {
                    return null;
                });
        }
    }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
    console.log(widthSize);*/
    return (
        <div className="w-[100%] h-[100vh] flex justify-center justify-items-center bg-black">
            <section className="w-[1240px] flex items-center max-xl:justify-center max-xl:relative max-xl:overflow-hidden">
                {/* list */}
                <div className="w-[760px]">
                    {/* 카테고리 */}
                    <ul
                        className="
                        flex gap-[10px] p-[10px] mr-[30px] rounded-[40px] box-border bg-[#4C4C4C]
                        max-xl:mr-0
                    "
                    >
                        {category.map(function (element: Category, index: number) {
                            return (
                                <li
                                    className={`flex-[1_1_auto] text-white rounded-[40px] box-border ${element.isActive ? "bg-[#818181]" : "bg-[#4C4C4C]"} duration-300`}
                                    key={index}
                                >
                                    <button
                                        type="button"
                                        className="w-[100%] block p-[10px_40px] text-[16px] leading-[170%]"
                                        onClick={() => {
                                            const copy = [...category];

                                            //클릭하는 요소의 값이 false일 경우
                                            if (!copy[index].isActive) {
                                                //모두 false
                                                copy.map(function (item) {
                                                    item.isActive = false;
                                                });
                                            }

                                            copy[index].isActive = !copy[index].isActive;
                                            setCategory(copy);
                                        }}
                                    >
                                        {element.englishName}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    {/* 카드 wrap */}
                    <div
                        className="h-[700px] mt-[20px] overflow-y-auto"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="flex flex-wrap gap-[20px_10px] mb-[95px] max-xl:flex-col">
                            {data.list.map(function (element, index) {
                                if (activeCategory?.KoreanName === element.information.how) {
                                    return (
                                        <Card
                                            titleDirection={element.title.direction}
                                            titleClient={element.title.client}
                                            liveLink={element.liveLink}
                                            informationWorking={element.information.working}
                                            informationContribution={
                                                element.information.contribution
                                            }
                                            informationPerson={element.information.person}
                                            informationScope={element.information.scope}
                                            informationHow={element.information.how}
                                            informationTool={element.information.tool}
                                            informationIsView={element.information.isView}
                                            index={index}
                                            key={index}
                                        />
                                    );
                                } else if (activeCategory?.KoreanName === "전체") {
                                    return (
                                        <Card
                                            titleDirection={element.title.direction}
                                            titleClient={element.title.client}
                                            liveLink={element.liveLink}
                                            informationWorking={element.information.working}
                                            informationContribution={
                                                element.information.contribution
                                            }
                                            informationPerson={element.information.person}
                                            informationScope={element.information.scope}
                                            informationHow={element.information.how}
                                            informationTool={element.information.tool}
                                            informationIsView={element.information.isView}
                                            index={index}
                                            key={index}
                                        />
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
                {/* view wrap */}
                <div
                    className={`
                        w-[480px] h-[788px] relative rounded-[40px] overflow-y-auto bg-linear-135 from-[#5b6f67] to-[#6f5d6b] duration-700
                        max-xl:absolute max-xl:z-99
                        ${activeContent?.information.isView ? "max-xl:right-[24px] max-xl:shadow-[-7px_10px_10px_rgba(0,0,0,.4)]" : "max-xl:right-[-100%]"}
                    `}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {activeContent ? (
                        // 있을 때
                        <View
                            titleDirection={activeContent.title.direction}
                            titleClient={activeContent.title.client}
                            informationIsView={activeContent.information.isView}
                            detail={activeContent.detail}
                        />
                    ) : (
                        // 없을 때
                        <View />
                    )}
                </div>
            </section>
        </div>
    );
}

export default Main;
