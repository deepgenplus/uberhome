import config from '../config/index.json';

const PrivacyPolicyContainer = () => {
  const { why, company } = config;
  const {
    whyInfoCard1,
    whyInfoCard2,
    arrowImg,
  } = why;

  return (
    <div className={`term-container mx-auto mt-[70px] flex justify-center`}>
      <div className={`xl:w-[1200px] lg:w-[1000px] md:w-[740px] w-full lg:px-[30px] md:px-[20px] px-[15px] lg:py-10 py-5`}>
        <div className={`text-justify md:mt-10 mt-5 sm:leading-10 leading-8`}>
          <div className={`text-center sm:text-[50px] text-[35px] font-bold`}>
            {company.name}
          </div>
          <div className={`md:block hidden text-center text-[24px] font-bold leading-10 mt-8`}>
            お部屋を送るだけで、仲介手数料0円 or 2.5万円(税込)<br />という賃貸サービスを始めた理由
          </div>
          <div className={`md:hidden sm:block hidden text-center text-[20px] font-bold leading-9 mt-8`}>
            お部屋を送るだけで、仲介手数料0円 or 2.5万円(税込)<br />という賃貸サービスを始めた理由
          </div>
          <div className={`sm:hidden block text-center text-[18px] font-bold leading-7 mt-8`}>
            お部屋を送るだけで、仲介手数料0円 or 2.5万円(税込)という賃貸サービスを始めた理由
          </div>
          <div className={`sm:text-[18px] text-[14px] mt-10`}>
            <div className={`sm:text-[20px] text-[16px] mt-7 font-bold text-color-third`}>そもそも仲介手数料とは</div>
            <div className={``}>
              賃貸借契約でお部屋を借りる際、借りたい方の代わりに住みたい地域や希望条件などのお部屋を探し出しご提案し、オーナー様との間に入って内見や契約の手続きなどをすることへの対価として発生するのが「仲介手数料」です。
            </div>

            <div className={`mt-7 font-bold`}>- 価格が従来の習慣のまま</div>
            <div className={``}>
              SUUMOやLIFULL HOME'Sなどの賃貸物件サイトの普及で、お部屋を借りたい方が自分で物件を見つけるケースがほとんどになりました。不動産業者の仕事量は減ったのに、仲介手数料は依然として「家賃１ヶ月分」という習慣が残ったままなのです。現在では、お問い合わせいただくお客様のほとんどが自分で住みたい部屋の候補を賃貸物件サイトから探して不動産業者にお問い合せをしてくれます。たくさんのお部屋から希望条件に合うお部屋を探す作業が減ったのに、仲介手数料を家賃１ヶ月分はもらいすぎ、と考えて新しい賃貸サービスとして始めたのが「LINEで賃貸」です。
            </div>

            <div className={`mt-7 font-bold`}>- 家賃１ヶ月分請求は仲介手数料のきまりに反する</div>
            <div className={``}>
              <div>宅地建物取引業法では、「依頼者の承諾を得ている場合を除き、報酬額（仲介手数料）は原則0.5ヶ月分以内」とされています。本来は、お客様が部屋を借りる際、「家賃1ヶ月分でいいです」と承諾しない限り仲介手数料は家賃0.5ヶ月分のはずですが、実態はお客様が家賃の1ヶ月分を支払うケースが大半となっています。</div>
              <div className={`justify-center flex mt-5`}>
                <img className={``} src={`/brokerage_fee_1.jpg`} alt="brokerage_fee_1" />
              </div>
            </div>

            <div className={`mt-7 font-bold`}>- 仲介手数料が0円にできる理由</div>
            <div className={``}>
              <div>
                オーナー様から広告料があるお部屋は、仲介手数料を0円でご紹介できます。そもそも広告料とは、オーナー様が「入居者を決めてくれた不動産業者に支払う報酬額」のことで、支払われるかどうかはオーナー様次第（物件次第）です。広告料が1ヶ月分支払われる場合は、不動産業者はお客様とオーナー様の両方から合計家賃2ヶ月分もいただいていることになります。<br />そこで「LINEで賃貸」では、広告料が支払われる物件は仲介手数料0円とし、広告料がない物件はサイトを運営するために必要な最低限の報酬として2.5万円をご負担いただいております。
              </div>
              <div className={`grid md:grid-cols-2 grid-cols-1 mt-5`}>
                <div className={`why-info-card shadow-md md:mb-0 mb-5 md:mx-2 mx-0 rounded-[10px]`}>
                  <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-3 lg:text-[25px] md:text-[20px] sm:text-[22px] text-[18px]`}>
                      {whyInfoCard1.title}
                  </div>
                  <div className={`py-10`}>
                    <div className={`flex justify-between px-6`}>
                      <div className={`w-24`}>
                        <img
                          className={`opacity-50`}
                          src={`/`+whyInfoCard1.leftImg}
                          alt={whyInfoCard1.leftImgTitle}
                        />
                        <div className={`text-center text-[14px] font-bold mt-1`}>
                          {whyInfoCard1.leftImgTitle}
                        </div>
                      </div>
                      <div className={`w-24`}>
                        <img
                          src={`/`+whyInfoCard1.rightImg}
                          alt={whyInfoCard1.rightImgTitle}
                        />
                        <div className={`text-center text-[14px] font-bold mt-1`}>
                          {whyInfoCard1.rightImgTitle}
                        </div>
                      </div>
                    </div>
                    <div className={`flex justify-between`}>
                      <div className={`w-20`}></div>
                      <img src={`/`+arrowImg} alt="RightArrow" className={`opacity-20   rotate-[-135deg]`} width="40" />
                      <div></div>
                      <img src={`/`+arrowImg} alt="LeftArrow" className={`-rotate-45`} width="40" />
                      <div className={`w-20`}></div>
                    </div>
                    <div className={`flex justify-center mt-4`}>
                      <img src="/logo.png" alt={company.name} width="160" />
                    </div>
                    <div
                      className={`text-center text-xl font-bold mt-4`}
                      dangerouslySetInnerHTML={{ __html: whyInfoCard1.bottomTitle }}
                    ></div>
                  </div>
                </div>
                <div className={`why-info-card shadow-md md:mx-2 mx-0 rounded-[10px]`}>
                  <div className={`why-info-card-title text-center bg-color-primary text-white font-bold rounded-t-[10px] py-3 lg:text-[25px] md:text-[20px] sm:text-[22px] text-[18px]`} style={{backgroundImage: `url(/bg_menu_item.svg)`}}>
                      {whyInfoCard2.title}
                  </div>
                  <div className={`py-10`}>
                    <div className={`flex justify-between px-6`}>
                      <div className={`w-24`}>
                        <img
                          src={`/`+whyInfoCard2.leftImg}
                          alt={whyInfoCard2.leftImgTitle}
                        />
                        <div className={`text-center text-[14px] font-bold mt-1`}>
                          {whyInfoCard2.leftImgTitle}
                        </div>
                      </div>
                      <div className={`w-24`}>
                        <img
                          className={`opacity-50`}
                          src={`/`+whyInfoCard2.rightImg}
                          alt={whyInfoCard2.rightImgTitle}
                        />
                        <div className={`text-center text-[14px] font-bold mt-1`}>
                          {whyInfoCard2.rightImgTitle}
                        </div>
                      </div>
                    </div>
                    <div className={`flex justify-between`}>
                      <div className={`w-20`}></div>
                      <img src={`/`+arrowImg} alt="RightArrow" className={`rotate-[-135deg]`} width="40" />
                      <div></div>
                      <img src={`/`+arrowImg} alt="LeftArrow" className={`opacity-20 -rotate-45`} width="40" />
                      <div className={`w-20`}></div>
                    </div>
                    <div className={`flex justify-center mt-4`}>
                      <img src="/logo.png" alt={company.name} width="160" />
                    </div>
                    <div
                      className={`text-center text-xl font-bold mt-4`}
                      dangerouslySetInnerHTML={{ __html: whyInfoCard2.bottomTitle }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className={`mt-5`}>
                LINEで賃貸は不動産業界の従来の習慣を無くし、そしてお客様に無駄な費用をいただくことなく気に入ったお部屋に入居いただきたいという想いで、オーナー様から広告料をいただけるお部屋については仲介手数料0円、広告料をいただけないお部屋については一律2.5万円（税込）でご提供できるかたちとしました。<br />以上がお客様に低コストな初期費用でご満足いただきたく「LINEで賃貸」という賃貸サービスを始めた理由となります。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyContainer;