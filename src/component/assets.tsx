import {useState} from "react";

function Card() {
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return <div className={`
        w-[360px] h-[340px] relative rounded-[40px] ${isHover ? "z-2 after:h-[435px]" : "after:h-[350px]"} cursor-pointer ${isClick ? "after:opacity-100" : "after:opacity-0"}
        after:content-[""] after:w-[100%] after:h-[350px] after:absolute after:top-0 after:left-0 after:border-[5px] after:border-[#F4F4F4] after:rounded-[40px] after:duration-300 after:pointer-events-none
        `} onMouseOver={() => setIsHover(true)} onMouseOut={()=>setIsHover(false)} onClick={()=>{setIsClick(!isClick)}}>
        {/* 뒷장 */}
        <div className={`w-[100%] ${isHover ? "h-[435px]" : "h-[350px]"} absolute top-0 left-0 rounded-[40px] backdrop-blur-[20px] bg-[rgba(255,255,255,.3)] shadow-[0_4px_10px_rgba(0,0,0,.4)] duration-300`}>
            <div className="w-[100%] flex flex-wrap gap-[5px] absolute bottom-[20px] left-0 p-[0_30px] box-border">
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">html5</div>
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">SCSS</div>
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">Javascript</div>
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">JQuery</div>
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">TypeScript</div>
                <div className="p-[4px_20px] rounded-[40px] text-black text-[14px] leading-[120%] bg-white">REACT</div>
            </div>
        </div>
        {/* 앞장 */}
        <div className="w-[100%] h-[100%] absolute top-0 left-0 rounded-[40px] bg-[#818181]">
            {/* 상단 */}
            <div className="flex justify-between pt-[30px]">
                {/* 타이틀 */}
                <div className="pl-[25px]">
                    <h4 className="text-white text-[24px] font-bold leading-[170%]">웹사이트 제작</h4>
                    <p className="text-white text-[16px] font-light leading-[170%]">국경없는의사회</p>
                </div>
                {/* 외부 링크 */}
                <div className="pr-[25px]">
                    <a href="" className="w-[74px] h-[74px] flex items-center justify-center border-[1px] border-white rounded-[100%] text-white text-[40px]">→</a>
                </div>
            </div>
            {/* 하단 정보 */}
            <div className="w-[100%] absolute bottom-[20px] left-0 p-[0_25px] box-border">

            </div>
        </div>
    </div>;
}

function View() {
    return <></>;
}

export { Card, View };
