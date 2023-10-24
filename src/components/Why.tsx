import Slider from 'react-slick';
import WhyFeedback from './WhyFeedback';
import CustomPrevArrow from './CustomPrevArrow';
import CustomNextArrow from './CustomNextArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import config from '../config/index.json';

const Why = () => {
  const { why, company } = config;
  const {
    title,
    firstComment,
    whyInfoCard1,
    whyInfoCard2,
    secondComment,
    arrowImg,
    recommendTitle,
    feedbacks,
  } = why;

  const sliderSettings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className={`py-12 text-black bg-color-grey`} id="why">
      <div
        className={`why-container mx-auto sm:px-5 px-3 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
      >
        <div className={`w-full`}>
          <span className={`text-5xl font-bold`}>
            <span className="text-color-third">W</span>hy
          </span>
          <span className={`ml-4`}>仲介手数料が0円の理由</span>
        </div>
        <div className="why-title-div mx-auto">
          <div
            className={`text-center text-2xl py-10`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
          <div
            className={`text-xl mb-4 text-justify`}
            dangerouslySetInnerHTML={{ __html: firstComment }}
          ></div>
        </div>
        <div className={`sm:block hidden why-info-card shadow-md mb-12`}>
          <div className={`why-info-card-title rounded-t-[10px] py-3 md:text-[26px] sm:text-[22px] text-[18px]`}>
              {whyInfoCard1.title}
          </div>
          <div className="py-10 px-2">
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
              </div>
              <img
                src={arrowImg}
                className={`opacity-20 rotate-180`}
                alt="RightArrow"
              />

              <img src="logo_sm.png" alt={company.name} width="136" />

              <img src={arrowImg} alt="LeftArrow" />
              <div>
                <img
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard1.bottomTitle }}
            ></div>
          </div>
        </div>
        <div className={`sm:block hidden why-info-card shadow-md mb-10`}>
          <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-3 md:text-[26px] sm:text-[22px] text-[18px] pattern-background`}>
              {whyInfoCard2.title}
          </div>
          <div className={`py-10 px-2`}>
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  src={whyInfoCard2.leftImg}
                  alt={whyInfoCard2.leftImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard2.leftImgTitle}
                </div>
              </div>
              <img src={arrowImg} alt="RightArrow" className={`rotate-180`} />

              <img src="logo_sm.png" alt={company.name} width="136" />
              
              <img src={arrowImg} className={`opacity-20`} alt="LeftArrow" />
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard2.rightImg}
                  alt={whyInfoCard2.rightImgTitle}
                />
                <div className={`text-center text-[22px] font-bold`}>
                  {whyInfoCard2.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard2.bottomTitle }}
            ></div>
          </div>
        </div>
        <div className={`sm:hidden w-full flex gap-x-2`}>
          <div className={`why-info-card shadow-md w-1/2`}>
            <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-2 md:text-[26px] sm:text-[22px] text-[16px]`}>
              オーナー様から<br />広告料がある場合
            </div>
            <div className={`w-full py-5 px-2`}>
              <div className={`flex flex-col justify-center items-center`}>
                <img
                  className={`opacity-50 w-[40%] min-w-[85px]`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center md:text-[22px] text-[16px] py-1 font-bold`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
                <img src={arrowImg} alt="RightArrow" className={`w-[12%] min-w-[50px] opacity-20 rotate-[-90deg] py-1`} />
                <img src="logo_sm.png" alt={company.name} className={`py-1 max-w-[120px]`} />
                <img src={arrowImg} alt="LeftArrow" className={`w-[12%] min-w-[50px] rotate-90 py-1 relative right-[1px]`} />
                <div className={`text-center md:text-[22px] text-[16px] py-1 font-bold`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
                <img
                  className={`w-[40%] min-w-[85px] pb-3`}
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div
                  className={`text-center text-[18px] font-bold pt-3 border-dotted border-t-[1px] border-black`}
                >
                  仲介手数料<br /><span className={`text-color-third text-[20px]`}>0</span> 円
                </div>
              </div>
            </div>
          </div>
          <div className={`why-info-card shadow-md w-1/2`}>
            <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-2 md:text-[26px] sm:text-[22px] text-[16px] pattern-background`}>
              オーナー様から<br />広告料がない場合
            </div>
            <div className={`w-full py-5 px-2`}>
              <div className={`flex flex-col justify-center items-center`}>
                <img
                  className={`w-[40%] min-w-[85px]`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center md:text-[22px] text-[16px] py-1 font-bold`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
                <img src={arrowImg} alt="RightArrow" className={`w-[12%] min-w-[50px] rotate-[-90deg] py-1`} />
                <img src="logo_sm.png" alt={company.name} className={`py-1 max-w-[120px]`} />
                <img src={arrowImg} alt="LeftArrow" className={`w-[12%] min-w-[50px] opacity-20 rotate-90 py-1 relative right-[1px]`} />
                <div className={`text-center md:text-[22px] text-[16px] py-1 font-bold`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
                <img
                  className={`opacity-50 w-[40%] min-w-[85px] pb-3`}
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div
                  className={`text-center text-[18px] font-bold pt-3 border-dotted border-t-[1px] border-black`}
                >
                  仲介手数料<br /><span className={`text-color-third text-[20px]`}>2,5</span> 円
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`text-justify text-lg leading-8`}
          dangerouslySetInnerHTML={{ __html: secondComment }}
        ></div>
        <div className={`why-recommend-panel mt-12`}>
          <div className={`text-2xl text-center`}>
            <span className={`border-b-2 border-black font-bold px-4 py-2`}>
              {recommendTitle}
            </span>
          </div>
          {/* <div className={`w-full grid sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 mt-10`}> */}
          <div className={`w-full mx-auto mt-10`}>
            <Slider {...sliderSettings}>
              {feedbacks.map((feedback, index) => (
                <WhyFeedback
                  key={index}
                  img={feedback.img}
                  comment={feedback.comment}
                  content={feedback.content}
                  bottomTip={feedback.bottomTip}
                ></WhyFeedback>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
