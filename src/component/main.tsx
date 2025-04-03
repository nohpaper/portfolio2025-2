import { Card, View } from "./assets.tsx";
import useDataStore from "../assets/store/store.tsx";

const category = ["ALL", "하드코딩", "리액트", "타입스크립트"];

function Main() {
    const data = useDataStore();

    return (
        <div className="w-[100%] h-[100vh] flex justify-center justify-items-center bg-black">
            <section className="w-[1240px] flex  items-center">
                {/* list */}
                <div className="w-[760px]">
                    {/* 카테고리 */}
                    <ul className="flex gap-[10px] p-[10px] mr-[30px] rounded-[40px] box-border bg-[#4C4C4C]">
                        {category.map(function (name, index) {
                            return (
                                <li
                                    className="text-white rounded-[40px] box-border bg-[#818181]"
                                    key={index}
                                >
                                    <button
                                        type="button"
                                        className="block p-[10px_40px] text-[16px] leading-[170%]"
                                    >
                                        {name}
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
                                return (
                                    <Card
                                        titleDirection={element.title.direction}
                                        titleClient={element.title.client}
                                        liveLink={element.liveLink}
                                        informationWorking={element.information.working}
                                        informationContribution={element.information.contribution}
                                        informationPerson={element.information.person}
                                        informationScope={element.information.scope}
                                        informationHow={element.information.how}
                                        informationTool={element.information.tool}
                                        informationIsView={element.information.isView}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* view wrap */}
                <div className="w-[480px] h-[788px] rounded-[40px] bg-amber-100">
                    <View />
                </div>
            </section>
        </div>
    );
}

export default Main;
