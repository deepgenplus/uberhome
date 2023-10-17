import React from 'react';

type QuestionAnswerPairProps = {
  index: number;
  question: string;
  answer: string;
};

const QuestionAnswerPair: React.FC<QuestionAnswerPairProps> = ({
  index,
  question,
  answer,
}) => {
  return (
    <div className={`faq-card w-full py-5 px-10`}>
      <div className={`flex text-xl`}>
        <div className={`faq-prefix-div question text-2xl font-bold -mt-1`}>
          Q{index}
        </div>
        <div
          className={`faq-content-div text-justify font-bold`}
          dangerouslySetInnerHTML={{ __html: question }}
        ></div>
      </div>
      <div className={`flex text-lg mt-3`}>
        <div className={`faq-prefix-div answer text-2xl font-bold -mt-1`}>
          A
        </div>
        <div
          className={`faq-content-div text-justify`}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></div>
      </div>
    </div>
  );
};

export default QuestionAnswerPair;
