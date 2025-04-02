import {Card} from "./assets.tsx";

const category = ["ALL", "하드코딩", "리액트", "타입스크립트"];
function Main() {
    return <div className="w-[100%] h-[100vh] flex justify-center justify-items-center bg-black">
        <section className="w-[64.58vw] flex  items-center">
            {/* list */}
            <div className="w-[760px]">
                {/* 카테고리 */}
                <ul className="flex gap-[10px] p-[10px] rounded-[40px] box-border bg-[#4C4C4C]">
                    { category.map(function(name, index) {
                        return (<li className="text-white rounded-[40px] box-border bg-[#818181]" key={index}>
                            <button type="button" className="block p-[10px_40px] text-[16px] leading-[170%]">{name}</button>
                        </li>)
                    }) }
                </ul>
                {/* 카드 wrap */}
                <div className="h-[700px] mt-[20px] overflow-y-auto" style={{ scrollbarWidth: 'none',  msOverflowStyle: 'none', }}>
                    <div className="flex flex-wrap gap-[20px_10px] mb-[95px]">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            {/* view wrap */}
            <div className="w-[480px] h-[788px] rounded-[40px] bg-amber-100"></div>
        </section>
    </div>;
}

export default Main;
