import React from 'react';

// eslint-disable-next-line @typescript-eslint/naming-convention
type serviceItemProps = {
  title: string;
  description: string;
  refs: string;
  imgPath: string;
};

const ServiceItem: React.FC<serviceItemProps> = ({
  title,
  description,
  refs,
  imgPath,
}) => {
  // const { pricing } = config;
  // const { items, title } = pricing;
  // const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <>
      <div className="serviceItem mx-auto max-w-7xl lg:px-8">
        <div
          className={`grid grid-cols-1 gap-y-16 text-center lg:grid-cols-2 mb-5`}
        >
          <div className="mx-auto flex flex-col gap-y-4">
            <div
              className={`item-left-title py-2 bg-color-primary text-white`}
              style={{ fontSize: '24px' }}
            >
              {title}
            </div>
            <div
              className={`item-left-description`}
              style={{ fontSize: '20px' }}
            >
              {description}
            </div>
            <div
              className={`item-left-ref font-bold`}
              style={{ fontSize: '18px' }}
            >
              {refs}
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-y-4">
            <img src={imgPath} alt="img" className="mx-auto py-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
