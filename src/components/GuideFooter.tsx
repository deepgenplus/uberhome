import config from '../config/index.json';

const Footer = () => {
  const { footer, guideNavigation } = config;
  const { secondLinks, firmSummary } = footer;

  return (
    <div className={`w-full py-10 px-5 md:flex text-black border-t-2 border-black bg-white`}>
      <div
        className={`md:w-1/4 w-full text-center md:text-5xl text-4xl items-center justify-center flex cursor-pointer md:py-0 pb-5 md:border-none border-b-2 border-black border-dotted`}
      >
        <div>
          <div>LINEで</div>
          <div className={`-mt-3`}>賃貸</div>
        </div>
      </div>
      <div className={`md:w-1/2 w-full flex md:px-6 px-0 md:py-0 py-5 md:border-none border-b-2 border-black border-dotted`}>
        <div className={`w-1/2 flex flex-col gap-y-2 md:text-justify text-center`}>
          {guideNavigation.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-sm cursor-pointer`}
            >
              {item.mobile_name}
            </a>
          ))}
        </div>
        <div className={`w-1/2 flex flex-col gap-y-2 md:text-justify text-center`}>
          {secondLinks.map((link, index) => (
            <a key={index} href={link.url} className={`text-sm`}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className={`md:w-1/4 w-full md:text-left text-center md:py-0 pt-5`}>
        <div className="w-full flex flex-col gap-y-2">
          {firmSummary.map((record, index) => (
            <div key={index} className={`text-sm`}>
              {record.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
