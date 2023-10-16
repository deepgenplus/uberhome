import config from '../config/index.json';
import WhyFeedback from './WhyFeedback';

const Why = () => {
  const { why } = config;
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
  return (
    <div className={`py-12 text-white`} id="why">
      <div
        className={`why-container mx-auto px-5 2xl:w-3/5 xl:w-2/3 lg:w-3/4 w-full`}
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
        <div className={`why-info-card pt-5 text-black mb-12`}>
          <div className={`text-center pt-7`}>
            <span
              className={`why-info-card-title py-2 px-5 text-2xl font-bold text-white`}
            >
              {whyInfoCard1.title}
            </span>
          </div>
          <div className="py-10">
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard1.leftImg}
                  alt={whyInfoCard1.leftImgTitle}
                />
                <div className={`text-center text-2xl font-bold`}>
                  {whyInfoCard1.leftImgTitle}
                </div>
              </div>
              <img
                src={arrowImg}
                className={`opacity-20 rotate-180`}
                alt="RightArrow"
              />
              <div className={`flex flex-col text-5xl text-center`}>
                <span className={`font-bold tracking-widest`}>
                  <span className={`text-color-third`}>U</span>ber
                </span>
                <span className={`font-bold tracking-tighter -mt-6`}>
                  <span className={`text-color-third`}>H</span>ome
                </span>
              </div>
              <img src={arrowImg} alt="LeftArrow" />
              <div>
                <img
                  src={whyInfoCard1.rightImg}
                  alt={whyInfoCard1.rightImgTitle}
                />
                <div className={`text-center text-2xl font-bold`}>
                  {whyInfoCard1.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold -mt-5`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard1.bottomTitle }}
            ></div>
          </div>
        </div>
        <div className={`why-info-card pt-5 text-black mb-10`}>
          <div className={`text-center pt-7`}>
            <span
              className={`why-info-card-title py-2 px-5 text-2xl font-bold text-white`}
            >
              {whyInfoCard2.title}
            </span>
          </div>
          <div className="py-10">
            <div className={`flex justify-center items-center gap-x-5`}>
              <div>
                <img
                  src={whyInfoCard2.leftImg}
                  alt={whyInfoCard2.leftImgTitle}
                />
                <div className={`text-center text-2xl font-bold`}>
                  {whyInfoCard2.leftImgTitle}
                </div>
              </div>
              <img src={arrowImg} alt="RightArrow" className={`rotate-180`} />
              <div className={`flex flex-col text-5xl text-center`}>
                <span className={`font-bold tracking-widest`}>
                  <span className={`text-color-third`}>U</span>ber
                </span>
                <span className={`font-bold tracking-tighter -mt-6`}>
                  <span className={`text-color-third`}>H</span>ome
                </span>
              </div>
              <img src={arrowImg} className={`opacity-20`} alt="LeftArrow" />
              <div>
                <img
                  className={`opacity-50`}
                  src={whyInfoCard2.rightImg}
                  alt={whyInfoCard2.rightImgTitle}
                />
                <div className={`text-center text-2xl font-bold`}>
                  {whyInfoCard2.rightImgTitle}
                </div>
              </div>
            </div>
            <div
              className={`text-center text-2xl font-bold -mt-5`}
              dangerouslySetInnerHTML={{ __html: whyInfoCard2.bottomTitle }}
            ></div>
          </div>
        </div>
        <div
          className={`text-justify text-lg`}
          dangerouslySetInnerHTML={{ __html: secondComment }}
        ></div>
        <div className={`why-recommend-panel mt-12`}>
          <div className={`text-2xl text-center`}>
            <span className={`border-b-2 border-white font-bold px-4 py-2`}>
              {recommendTitle}
            </span>
          </div>
          <div className={`w-full grid grid-cols-2 gap-x-5 gap-y-10 mt-10`}>
            {feedbacks.map((feedback, index) => (
              <WhyFeedback
                key={index}
                img={feedback.img}
                comment={feedback.comment}
                content={feedback.content}
                bottomTip={feedback.bottomTip}
              ></WhyFeedback>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
