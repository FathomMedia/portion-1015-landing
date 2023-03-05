import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { NoNotification } from "../../components/NoNoti";

interface Props {}

const UnsubscribeFromWaitingList: NextPage<Props> = () => {
  const { query } = useRouter();
  const { email } = query;

  const [isUnsubscribing, setIsUnsubscribing] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /**
   * It sends a POST request to the server with the email address, and if the server responds with a
   * 200 status code, it sets the unsubscribed state to true
   */
  async function unsubscribe() {
    // Reset Error message
    setErrorMessage(null);

    if (typeof email === "string") {
      setIsUnsubscribing(true);
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        body: JSON.stringify({
          email: email,
        }),
      });
      setIsUnsubscribing(false);
      if (res.status === 200) setUnsubscribed(true);
      if (res.status === 500) {
        const err = await res.json();
        setErrorMessage(err["errorMessage"]);
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 mt-24">
      <NoNotification></NoNotification>
      {email && (
        <p className="px-3 py-1 text-sm text-gray-500 bg-gray-200 rounded-lg">
          {email}
        </p>
      )}
      {unsubscribed ? (
        <h2 className="max-w-xs text-lg font-semibold text-center">
          You have unsubscribed successfully.
        </h2>
      ) : (
        <h2 className="max-w-xs text-lg font-semibold text-center">
          Opt out of the waiting list?
        </h2>
      )}
      <p className="max-w-xs text-sm text-center text-gray-400">
        You will be removed from the waiting list and will not receive an email
        from us.
      </p>
      <button
        type="button"
        disabled={isUnsubscribing || unsubscribed || !email}
        onClick={unsubscribe}
        className="px-4 py-2 rounded-full bg-primary text-secondary disabled:bg-gray-300 disabled:text-gray-600"
      >
        Unsubscribe
      </button>
      {errorMessage && (
        <div>
          <p className="max-w-sm text-sm text-center text-red-400">
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default UnsubscribeFromWaitingList;
