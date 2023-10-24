import config from '../config/index.json';

const MiddleSendRoomBanner = () => {
  const {mainHero} = config;

  return (
    <div className={`middle-send-room-banner w-full md:h-[500px] h-[300px] border-t-4 border-white flex flex-col items-center justify-center`}>
      <div className={`w-full`}>
        <div className={`font-semibold md:text-[24px] sm:text-[20px] text-[15px] text-center`}>
          {mainHero.title}
        </div>
        <div className={`w-full font-bold lg:text-[30px] md:text-[28px] sm:text-[20px] text-[18px] text-center mt-6`}>
          <div className={`w-full text-center`}>他サイトで見つけた気になるお部屋</div>
          <div className={`w-full text-center md:-mt-3 sm:-mt-2 -mt-1`}>
            仲介手数料{' '}
            <span className={`text-color-third`}>
              最大
              <span className={`md:text-[42px] sm:text-[36px] text-[28px] font-bold relative`}>0</span>円
            </span>{' '}
            でお届け。
          </div>
        </div>
      </div>
      <a href="https://lin.ee/embmgjs">
        <button
          className={`bg-color-green rounded-full md:text-2xl text-xl font-bold text-center text-white mt-8 px-5 py-2 shadow-lg shine block`}
        >
          {mainHero.sendBtnTitle}
        </button>
      </a>
    </div>
  )
}

export default MiddleSendRoomBanner;