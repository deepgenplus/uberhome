import React from 'react';

type AboutStepProps = {
  title: string;
  content: string;
  img: string;
};

const AboutStep: React.FC<AboutStepProps> = ({ title, content, img }) => {
  return (
    <div className={`about-step-card lg:mx-0 md:mx-auto`}>
      <div className="about-step-card-img">
        <img src={img} alt="img" className="mx-auto py-3" />
      </div>
      <div className="about-step-card-title justify-center py-2">{title}</div>
      <div className="about-step-card-content justify-center flex items-center">
        <div
          className={`leading-8 px-4`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default AboutStep;
