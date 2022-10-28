const PrivacyPolicy = () => {
  return (
    <div className="container px-16 mt-32 space-y-4 py-12">
      <div className="w-full border-b-2">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>
      <br />
      <h2 className="text-xl font-medium">General</h2>
      <p>
        Portion recognizes that the protection of privacy is a major concern to
        many of our customers and we want you to know how we acquire personal
        information through the App and how we use that data. By using this App,
        you are consenting to the information collection, use and disclosure
        practices described below.
      </p>
      <br />
      <h2 className="text-xl font-medium">User Data</h2>
      <p>
        When signing up to Portion, we may gather and process data that is
        voluntarily provided by you, such as, and not limited to: your name,
        address, email address and phone number, birth date, and dietary
        preferences.
      </p>
      <br />
      <h2 className="text-xl font-medium">Data Processing</h2>
      <p>
        Data gathered during registration is used to deliver personalized
        information that we believe will be of interest to you. The more
        relevant information you share, the better we are able to deliver
        content that is tailored to you.
      </p>
      <br />
      <h2 className="text-xl font-medium">Using Information</h2>
      <p>
        We may use information from the data gathered to manage orders, process
        payments, offer returns or exchanges, send marketing communications,
        improve our app, prevent fraud, assist law enforcement, or take legal
        action.
      </p>
      <br />
      <h2 className="text-xl font-medium">Updating Personal Information</h2>
      <p>
        We understand that you may wish to opt out of any marketing
        communications, or update your personal information. You may do so by
        emailing us at{" "}
        <a className="text-primary" href="mailto:support@portion-app.com">
          support@portion-app.com
        </a>
        .
      </p>
      <br />
    </div>
  );
};

export default PrivacyPolicy;
