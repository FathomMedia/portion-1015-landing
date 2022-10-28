/* eslint-disable react/no-unescaped-entities */
const TermsAndConditions = () => {
  return (
    <div className="container px-16 mt-32 space-y-4 py-12">
      <div className="w-full border-b-2">
        <h1 className="text-3xl font-bold">Terms & Conditions</h1>
      </div>
      <br />
      <h2 className="text-xl font-medium">General</h2>
      <p>
        These Terms & Conditions apply to the Portion application including,
        without limitation, Portion iOS app, Android app or
        website(collectively, the "App"). As used in these Terms & Conditions,
        "Portion ", "us", or "we" refers to Portion. By accessing the Portion
        app, you hereby agree to these terms and conditions.
        <br />
        <br /> If you do not accept the terms and conditions, you must
        immediately stop using all or any part of the App.
      </p>
      <br />
      <h2 className="text-xl font-medium">Ordering</h2>
      <p>
        If you place an order through the App, you are responsible for ensuring
        that your order is correct and you have designated the proper store for
        pick-up or address for delivery.
      </p>
      <br />
      <h2 className="text-xl font-medium">Payment</h2>
      <p>
        If you are paying by credit card, we will pre-authorize your credit card
        to verify availability of funds. In either case, if the order is
        modified prior to pick-up or delivery, any overage will be charged to
        your credit card.
      </p>
      <br />
      <h2 className="text-xl font-medium">Refund Policy</h2>
      <p>
        We currently do not offer refunds for cancellations, wrong orders, or
        any other reason.
      </p>
      <br />
    </div>
  );
};

export default TermsAndConditions;
