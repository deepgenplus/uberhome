const PrivacyPolicyContainer = () => {
  return (
    <div className={`term-container mx-auto mt-[70px] flex justify-center`}>
      <div className={`xl:w-[1200px] lg:w-[1000px] md:w-[740px] w-full lg:px-[30px] md:px-[20px] px-[15px] lg:py-10 py-5`}>
        <div className={`text-justify md:mt-10 mt-5 leading-10`}>
          <div className={`text-center sm:text-[25px] text-[22px] font-medium`}>
            <span className={`term-title px-[50px] relative inline-block`}>個人情報保護方針</span>
          </div>
          <div className={`text-[18px] mt-10`}>
            <div className={`mt-7 font-bold`}>個人情報保護方針</div>
            <div className={``}>
              （「LINEで賃貸」（以下 当サイト）は、お客様のプライバシーに係わる個人情報を保護することに細心の注意を払い取り組みます。当サイトにおいて、お客様ご自身の判断により個人情報をご提供いただく場合がございますが、その情報は必要最小限の情報とし、その他の情報のご提供につきましてはお客様の判断を尊重いたします。
            </div>
            
            <div className={`mt-7 font-bold`}>1. 個人情報の収集および利用目的について</div>
            <div className={``}>
              当サイトでは依頼者・相談者をはじめとする個人情報を取得する場合、利用目的を明示し、適正かつ公正な手段によって行ないます。
              <br />
              プライバシー情報のうち「履歴情報および特性情報」とは，上記に定める「個人情報」以外のものをいい，ご利用いただいたサービスやご購入いただいた商品，ご覧になったページや広告の履歴，ユーザーが検索された検索キーワード，ご利用日時，ご利用の方法，ご利用環境，郵便番号や性別，職業，年齢，ユーザーのIPアドレス，クッキー情報，位置情報，端末の個体識別情報などを指します。
            </div>
            
            <div className={`mt-7 font-bold`}>利用目的</div>
            <div className={``}>
              個人情報を以下の業務遂行・目的のために取得いたします。
              <ul className={`list-disc list-outside pl-[25px]`}>
                <li>本サービス及びその他のサービスに関するご案内、お問い合せ等への対応のため</li>
                <li>ご相談、お問い合わせに関する回答のため</li>
                <li>上記の利用目的に付随する利用目的のため</li>
              </ul>
            </div>
            
            <div className={`mt-7 font-bold`}>2. 個人情報の安全管理・保管</div>
            <div className={``}>
              当サイトは、ご提供いただいた個人情報を正確にデータ処理し、当サイトが保有する個人情報の安全性を確保するため、適切な保護・安全対策を実施し、個人情報の紛失、破壊、改ざん、漏えいの防止に努めます。
            </div>
            
            <div className={`mt-7 font-bold`}>3. 個人情報の提供</div>
            <div className={``}>
              個人情報について、お客様ご本人の同意を得ずに当サイトが第三者に提供することは、以下の場合を除き、原則いたしません。
              <ul className={`list-disc list-outside pl-[25px]`}>
                <li>本サービスを実施するに当たり弊社代理店に対して個人情報を提供する必要がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                <li>業務の遂行に係り、官公署へ書類を提出する場合</li>
              </ul>
            </div>
            
            <div className={`mt-7 font-bold`}>4. 個人情報の開示･利用停止・消去について</div>
            <div className={``}>
              個人情報の情報主体であるご本人が自己の個人情報について、開示、訂正、利用停止、消去等の要求をなされた場合は、適切な方法により、ご本人であることの確認を経た上で、法令または業務上拒否することが認められた場合を除き速やかに対応致します。
            </div>
            
            <div className={`mt-7 font-bold`}>5. 個人情報保護方針の改定</div>
            <div className={``}>
              当サイトでは、社会情勢の変化、技術の進歩、諸環境の変化等に応じ、事前の予告なくプライバシーポリシーを変更することがあります。
            </div>
            
            <div className={`mt-7 font-bold`}>6. 著作権</div>
            <div className={``}>
              当サイトのコンテンツ(文章、写真、画像、データ、イメージ、グラフィックス、など)及びこれらの配置・編集および構造などについての著作権は当サイトに帰属しておりますので、これらの無断使用（Webサイトの全部あるいは一部の複製、送信、放送、出版、頒布、掲示、譲渡、貸与、翻訳、翻案、使用許諾、再利用等を含む）、転載、変更、改ざん、商業的利用はご遠慮ください。
            </div>
            
            <div className={`mt-7 font-bold`}>7. 免責事項</div>
            <div className={``}>
              当サイトに掲載されている情報には万全を期していますが、法律の改正その他の原因により当サイトの情報を利用することによって生じた損害に対して一切の責任（間接損害・特別損害・結果的損害及び付随的損害）を負うものではありません。情報の利用に関しましては全て最終自己責任で行って頂くようお願いします。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyContainer;