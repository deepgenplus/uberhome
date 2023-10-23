import config from '../config/index.json';

const ToCustomer = () => {
  const { service } = config;
  const { toClients } = service;

  return (    
    <div>
      <div className={`w-full flex md:flex-row flex-col`}>
        <div className={`md:w-1/2 w-full md:h-[660px]`}>
          <img className={`md:block hidden object-cover object-center w-full h-full`} src={`service6.jpg`} alt="service"/>
          <img className={`md:hidden block object-cover object-center w-full`} src={`service6_sm.jpg`} alt="service" />
        </div>
        <div className={`md:w-1/2 w-full text-black md:flex md:justify-center md:items-center`}>
          <div className={`md:w-[520px] md:max-w-[95%] md:p-0 px-5 py-7`}>
            <div className={`text-[40px] font-bold md:text-justify text-center`}><span className={`text-color-third`}>T</span>o customers <span className={`text-[14px] font-normal`}>お客様へ</span></div>
            <div className={`text-justify lg:text-[18px] text-[16px] lg:leading-8 leading-7`}>
              {toClients.comments.map((comment, index) => (
                <div key={index} className={`text-justify mt-5`} dangerouslySetInnerHTML={{ __html: comment }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToCustomer;