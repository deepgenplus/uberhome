import config from '../config/index.json';

const SendRoom = () => {
  const { sendRoom } = config;
  const {
    title,
    subtitle,
    leftSmallTitle,
    leftComment,
    leftBottomTip,
    rightGuideImg,
    lineTab,
  } = sendRoom;
  const { guides } = lineTab;

  return (
    <div id="sendroom">
      <hr className={`border-3 h-`} />
      <div
        className={`sendroom-container mx-auto px-5 py-12 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full text-black`}
      >
        <div className={`w-full text-center`}>
          <span
            className={`border-b-2 border-black font-bold text-2xl px-3 py-2`}
          >
            {title}
          </span>
        </div>
        <div className={`text-sm text-center mt-8`}>{subtitle}</div>
        <div className={'phone-guide-panel w-full flex mt-10'}>
          <div className={`sm:w-1/2 w-full px-5 sm:py-0 sm:bg-white bg-color-skin sm:rounded-0 rounded-lg sm:shadow-none shadow-md py-5`}>
            <div
              className={`w-full py-2 flex justify-center`}
            >
              <img src="send_room_subtitle.png" alt={leftSmallTitle} />
            </div>
            <div className={`sm:w-1/2 sm:hidden flex px-5 items-center`}>
              <img src={rightGuideImg} alt="phoneURL" className={`w-full`} />
            </div>
            <div
              className={`phone-guide-left-comment w-full py-3 text-lg text-justify`}
            >
              <div>{leftComment}</div>
              <div className={`font-bold text-md`}>{leftBottomTip}</div>
            </div>
          </div>
          <div className={`sm:w-1/2 sm:flex hidden px-5 items-center`}>
            <img src={rightGuideImg} alt="phoneURL" className={`w-full`} />
          </div>
        </div>
        <div className={`sm:px-5 px-0 py-10 flex`}>
          <div className={`sm:w-2/3 w-full`}>
            <div className={`w-full text-center sm:text-[30px] text-[26px] font-bold`}>LINEで送る</div>
            <div className={`w-full mt-2 px-3 xl:text-[24px] md:text-[20px] sm:text-[18px] text-[20px] text-justify`}>
              <div
                className={`font-normal`}
                dangerouslySetInnerHTML={{
                  __html: lineTab.leftTopComment,
                }}
              ></div>
              <div className={`sm:hidden flex w-full p-3 items-center justify-center`}>
                <img
                  src={lineTab.rightImg}
                  alt="LineChat"
                />
              </div>
              <div
                className={`font-bold mt-5 sm:block hidden`}
                dangerouslySetInnerHTML={{
                  __html: lineTab.leftBottomComment,
                }}
              ></div>
              <div className={`sm:hidden block text-center font-bold mt-2`}>まずは<span className={`text-color-third`}>友だち追加</span>をお願いします</div>
              <div className={`flex sm:flex-row flex-col items-center mt-5`}>
                <a href='https://lin.ee/b7DZX2N' target="_blank" className={`shine`}><img src={lineTab.lineBtnImg} alt="LINEBTN"></img></a>
                <span className={`2xl:text-[26px] xl:text-[22px] lg:text-[23px] md:text-[22px] sm:text-[20px] font-bold sm:ml-2 sm:mt-0 ml-0 mt-3`}>
                  {lineTab.lineBtnRightComment}
                </span>
              </div>
            </div>
          </div>
          <div className={`sm:w-1/3 sm:flex hidden w-full p-3 items-center justify-center`}>
            <img
              className={`w-full`}
              src={lineTab.rightImg}
              alt="LineChat"
            />
          </div>
        </div>
        <div className={`line-guide-panel w-full md:px-12 sm:px-6 px-3 py-8`}>
          <div className={`text-center font-bold text-xl`}>
            {guides.title}
          </div>
          <div className={`flex-row gap-y-5 mt-5`}>
            {guides.contents.map((content, index) => (
              <div
                key={index}
                className={`text-lg leading-10 text-justify`}
              >
                {index + 1}. {content.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendRoom;
