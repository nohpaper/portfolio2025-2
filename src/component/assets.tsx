import { useState } from "react";
import useDataStore, { Detail } from "../assets/store/store.tsx";
import iconLink from "../assets/images/icon_link.svg";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const detailImagesSwiper = (swiperContent: string[]) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={10}
        >
            {swiperContent.map((element, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        className="min-w-[400px] h-[313px] rounded-[20px] overflow-hidden bg-[#909695]"
                    >
                        <img src={element} alt="" className="w-[100%] h-[100%]" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

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
    index: number;
}

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
    index,
}: ListDataProps) {
    const [isHover, setIsHover] = useState(false);
    const list = useDataStore((state) => state.list);
    const isViewToggle = useDataStore((state) => state.isViewToggle);
    const isViewAllRemove = useDataStore((state) => state.isViewAllRemove);

    return (
        <div
            className={`
        w-[360px] h-[340px] relative rounded-[40px] ${isHover ? "z-2 after:h-[435px]" : "after:h-[350px]"} cursor-pointer ${list[index].information.isView ? "after:opacity-100" : "after:opacity-0"}
        after:content-[""] after:w-[100%] after:h-[350px] after:absolute after:top-0 after:left-0 after:border-[5px] after:border-[#F4F4F4] after:rounded-[40px] after:duration-300 after:pointer-events-none
        max-xl:w-auto max-xl:max-w-[100%] max-xl:px-[24px]
        `}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
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
                    {liveLink === "" ? (
                        <div className="w-[74px] h-[74px] pr-[25px]"></div>
                    ) : (
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
                    )}
                </div>
                {/* 하단 정보 */}
                <div className="w-[100%] absolute bottom-[10px] left-0 p-[0_25px] box-border">
                    <div className="flex justify-between items-center max-xl:w-[50%]">
                        <div>
                            <p className="text-[12px] leading-[170%]">작업기간(일)</p>
                            <strong className="text-[16px] font-light leading-[170%]">
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
                                onClick={() => {
                                    !informationIsView && isViewAllRemove();
                                    isViewToggle(index);
                                }}
                            >
                                자세히보기
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between pt-[15px] max-xl:w-[50%]">
                        <div>
                            <p className="text-[12px] leading-[170%]">기여도</p>
                            <strong className="text-[32px] font-light leading-[120%]">
                                {informationContribution}
                                <span className="text-[20px]">%</span>
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업인원</p>
                            <strong className="text-[16px] font-light leading-[170%]">
                                {informationPerson}
                                <span>명</span>
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업범위</p>
                            <strong className="text-[16px] font-light leading-[170%]">
                                {informationScope}
                            </strong>
                        </div>
                        <div>
                            <p className="text-[12px] leading-[170%]">작업방식</p>
                            <strong className="text-[16px] font-light leading-[170%]">
                                {informationHow}
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ViewDataProps {
    titleDirection?: string;
    titleClient?: string;
    informationIsView?: boolean;
    detail?: Detail[];
}

function View({ titleDirection, titleClient, informationIsView, detail }: ViewDataProps) {
    return informationIsView ? (
        <div className="h-[100%]">
            <div className="pt-[20px] pl-[20px]">
                <h4 className="text-white text-[36px] font-bold leading-[170%]">
                    {titleDirection}
                </h4>
                <p className="text-white text-[24px] font-bold leading-[170%]">{titleClient}</p>
            </div>
            <div className="px-[20px] pb-[20px]">
                {detail
                    ? detail.map((element, index) => {
                          return (
                              <div
                                  className={`${index === 0 ? "pt-[10px]" : "pt-[40px]"}`}
                                  key={index}
                              >
                                  {element.siteImage.length === 0 ? null : (
                                      <div>{detailImagesSwiper(element.siteImage)}</div>
                                  )}
                                  <div className="pt-[10px]">
                                      {detailImagesSwiper(element.codeImage)}
                                  </div>
                                  <div className="pt-[10px] text-[16px] font-bold">
                                      {element.title}
                                  </div>
                                  <div className="pt-[5px] text-[14px]">
                                      {Array.isArray(element.contentText) ? (
                                          element.contentText.map((item, index) => {
                                              return (
                                                  <p
                                                      key={index}
                                                      className={`${index > 0 && "pt-[10px]"}`}
                                                  >
                                                      {item}
                                                  </p>
                                              );
                                          })
                                      ) : (
                                          <p>{element.contentText}</p>
                                      )}
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    ) : (
        <div className="h-[100%]">
            <div className="py-[20px] mx-[20px] overflow-hidden">
                <h5 className="text-[36px] font-bold leading-[170%] whitespace-pre hover:translate-x-[-100%] hover:duration-[7s] ease-linear">
                    <br />
                    퍼블리셔입니다
                </h5>
            </div>
            <div className="flex gap-[5px] flex-col mx-[20px]">
                <div className="flex gap-[5px] flex-wrap">
                    <div className="stack-button">HTML5</div>
                    <div className="stack-button">CSS</div>
                    <div className="stack-button">SCSS</div>
                    <div className="stack-button">JavaScript</div>
                    <div className="stack-button">JQuery</div>
                    <div className="stack-button">React</div>
                    <div className="stack-button">TypeScript</div>
                </div>
                <div className="flex gap-[5px] flex-wrap">
                    <div className="stack-button">VScode</div>
                    <div className="stack-button">intelliJ</div>
                    <div className="stack-button">webStorm</div>
                    <div className="stack-button">Slack</div>
                    <div className="stack-button">Figma</div>
                </div>
            </div>
            <div className="pt-[10px] mx-[20px]">
                <div className="w-[100%] h-[390px] rounded-[20px] bg-[rgba(255,255,255,0.3)]"></div>
            </div>
            <div className="pt-[10px] mx-[20px]">
                <p className="text-[16px] font-light leading-[170%]">
                    프로젝트 기간 수립 및 계획 실행
                </p>
                <p className="pt-[5px] text-[16px] font-light leading-[170%]">
                    홈페이지 유지보수 업무
                </p>
                <p className="pt-[5px] text-[16px] font-light leading-[170%]">
                    인터렉션 홈페이지 제작
                </p>
            </div>
            <div className="absolute right-[20px] bottom-[20px]">
                <a href="mailto:nohpaper99@naver.com">이메일</a>
                <a href="https://github.com/nohpaper" target="_blank" className="ml-[10px]">
                    깃허브
                </a>
            </div>
        </div>
    );
}

export { Card, View };
