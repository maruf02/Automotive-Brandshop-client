import React from "react";

const OurFeatureSection = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Our Features
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-lime-500 md:text-4xl">
          Our Features Make your life easier and Luxurious
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-black md:grid-cols-3">
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Diverse Car Selection:
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              We offer a wide range of car models from various manufacturers,
              ensuring that you have a diverse selection to choose from. Whether
              you're looking for a compact car, an SUV, or a luxury vehicle, we
              have something for everyone.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Expert Advice:</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Our experienced and knowledgeable staff is here to assist you
              throughout your car-buying journey. We provide expert advice,
              answer your questions, and guide you to make the best choice based
              on your needs and preferences.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Quality Assurance:
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              We prioritize the quality of our cars. Each vehicle undergoes a
              rigorous inspection to ensure it meets our high standards. You can
              trust that the car you purchase is reliable and well-maintained.
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Competitive Pricing:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We offer competitive and transparent pricing. Our goal is to
                provide you with the best value for your investment. No hidden
                fees or surprises - just straightforward pricing.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/templates" className="group">
              <img
                src="https://www.svgrepo.com/show/530450/page-analysis.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Flexible Financing Options:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                We understand that not everyone can make an upfront payment.
                That's why we offer flexible financing options to make buying
                your dream car more accessible. Our finance team can help you
                find the right plan for your budget.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/download" className="group">
              <img
                src="https://www.svgrepo.com/show/530453/mail-reception.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Test Drives:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                If you're looking to upgrade your current vehicle, we provide
                trade-in services. We'll evaluate your car's worth and offer
                fair market value for your trade-in, making it easier to
                transition to a new car.
              </p>
            </a>
          </li>
        </ul>
      </div>

      {/*  */}

      {/*  */}
    </div>
  );
};

export default OurFeatureSection;
