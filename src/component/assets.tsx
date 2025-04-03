import { useState } from "react";
import iconLink from "../assets/images/icon_link.svg";
interface ListDataProps {
    titleDirection: string;
    titleClient: string;
    liveLink: string;

    informationWorking: string;
    informationContribution: number;
    informationPerson: number;
    informationScope: string;
    informationHow: string;
    informationTool: string[];
    informationIsView: boolean;
}

interface ViewDataProps {}

function Card({
    titleDirection,
    titleClient,
    liveLink,
    informationWorking,
    informationContribution,
    informationPerson,
    informationScope,
    informationHow,
    informationTool,
    informationIsView,
}: ListDataProps) {
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return (
        <div
            className={`
        w-[360px] h-[340px] relative rounded-[40px] ${isHover ? "z-2 after:h-[435px]" : "after:h-[350px]"} cursor-pointer ${isClick ? "after:opacity-100" : "after:opacity-0"}
        after:content-[""] after:w-[100%] after:h-[350px] after:absolute after:top-0 after:left-0 after:border-[5px] after:border-[#F4F4F4] after:rounded-[40px] after:duration-300 after:pointer-events-none
        `}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
            onClick={() => {
                setIsClick(!isClick);
            }}
        >
            {/* 뒷장 */}
            <div
                className={`w-[100%] ${isHover ? "h-[435px]" : "h-[350px]"} absolute top-0 left-0 rounded-[40px] backdrop-blur-[10px] bg-[rgba(255,255,255,.3)] shadow-[0_4px_10px_rgba(0,0,0,.4)] duration-300`}
            >
                <div className="w-[100%] flex flex-wrap gap-[5px] absolute bottom-[20px] left-0 p-[0_30px] box-border">
                    {informationTool.map(function (element, index) {
                        return (
                            <div
                                className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white"
                                key={index}
                            >
                                {element}
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* 앞장 */}
            <div className="w-[100%] h-[100%] absolute top-0 left-0 rounded-[40px] bg-[#818181]">
                {/* 상단 */}
                <div className="flex justify-between pt-[30px]">
                    {/* 타이틀 */}
                    <div className="pl-[25px]">
                        <h4 className="text-white text-[24px] font-bold leading-[170%]">
                            {titleDirection}
                        </h4>
                        <p className="text-white text-[16px] font-light leading-[170%]">
                            {titleClient}
                        </p>
                    </div>
                    {/* 외부 링크 */}
                    <div className="pr-[25px]">
                        <a
                            href={liveLink}
                            className={`
                                w-[74px] h-[74px] relative flex items-center justify-center border-[1px] border-white rounded-[100%] text-white text-[40px] overflow-hidden duration-150
                                hover:border-[4px]
                            `}
                            target="_blank"
                        >
                            <img
                                src={iconLink}
                                alt=""
                                className="w-[100%] h-[100%] absolute top-0 left-0 duration-150"
                            />
                        </a>
                    </div>
                </div>
                {/* 하단 정보 */}
                <div className="w-[100%] absolute bottom-[10px] left-0 p-[0_25px] box-border">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[12px] leading-[170%]">작업기간(일)</p>
                            <strong className="text-[16px] font-[400] leading-[170%]">
                                {informationWorking}
                            </strong>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="
                                    p-[4px_20px_2px] rounded-[10px] text-white text-[12px] font-bold leading-[170%] bg-[#C0C0C0] duration-300
                                    hover:bg-[#4C4C4C] hover:text-white
                                "
                                /*onClick={()=>{informationIsView()}}*/
                            >
                                자세히보기
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between pt-[15px]">
                        <div>
                            <p className="text-[12px] leading-[170%]">기여도</p>
                            <strong className="text-[32px] font-[400] leading-[120%]">
                                {informationContribution}
                                <span className="text-[20px]">%</span>
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업인원</p>
                            <strong className="text-[16px] font-[400] leading-[170%]">
                                {informationPerson}
                                <span>명</span>
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업범위</p>
                            <strong className="text-[16px] font-[400] leading-[170%]">
                                {informationScope}
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업방식</p>
                            <strong className="text-[16px] font-[400] leading-[170%]">
                                {informationHow}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function View({}: ViewDataProps) {
    return <div></div>;
}

export { Card, View };
