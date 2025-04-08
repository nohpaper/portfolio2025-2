import { Card, View } from "./assets.tsx";
import useDataStore from "../assets/store/store.tsx";
import { useState } from "react";

interface CategoryItem {
    englishName: string;
    KoreanName: string;
    isActive: boolean;
}
type Category = CategoryItem;
function Main() {
    const data = useDataStore();
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
    const activeCategory = category.find((element) => element.isActive);
    const activeContent = data.list.find((element) => element.information.isView);

    return (
        <div className="w-[100%] h-[100vh] flex justify-center justify-items-center bg-black">
            <section className="w-[1240px] flex  items-center">
                {/* list */}
                <div className="w-[760px]">
                    {/* 카테고리 */}
                    <ul className="flex gap-[10px] p-[10px] mr-[30px] rounded-[40px] box-border bg-[#4C4C4C]">
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
                        <div className="flex flex-wrap gap-[20px_10px] mb-[95px]">
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
                    className="w-[480px] h-[788px] relative rounded-[40px] overflow-y-auto bg-linear-135 from-[#5b6f67] to-[#6f5d6b]"
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
