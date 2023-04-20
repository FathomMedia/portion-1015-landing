import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import NextCors from "nextjs-cors";

type Data = {
  isSent: boolean;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /* Getting the user's email address from the query string. */
  const userEmail = req.query.userEmail as string;

  /* A middleware that allows the API to accept requests from the frontend. */
  await NextCors(req, res, {
    methods: ["POST"],
    // origin: "https://www.admin.portion-app.com", //! TODO - replace the url with the actual address of portion website
    optionsSuccessStatus: 200,
  });

  /* Creating a transporter object that will be used to send the email. */
  const transporter = createTransport({
    port: 465,
    host: "smtp.zoho.com",
    auth: {
      user: process.env.ZOHO_USERNAME,
      pass: process.env.ZOHO_PASSWORD,
    },
    secure: true,
  });

  /* Creating an object that will be used to send the email. */
  const mailData = {
    from: process.env.ZOHO_USERNAME,
    to: userEmail,
    subject: `Portion - You're In!`,
    html: emailTemplate(userEmail),
  };

  /* Sending the email to the user. */
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500);
      res.json({ isSent: false, error: err });
    } else {
      console.log(info);
      res.status(200);
      res.json({ isSent: true });
    }
  });
}

/**
 * It takes in a user's email address and returns an HTML template that can be used to send an email to
 * the user
 * @param {string} userEmail - The email address of the user who signed up.
 * @returns A string of HTML code.
 */
function emailTemplate(userEmail: string) {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
  
    <head>
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    </head>
    <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Great news, you&#x27;re in!<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿</div>
    </div>
  
    <body style="background-color:rgb(55,79,98);padding-top:2.5rem;padding-bottom:2.5rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;">
      <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" style="margin-left:auto;margin-right:auto;max-width:36rem;border-radius:0.75rem;background-color:rgb(255,255,255);padding:2rem;box-shadow:0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgb(0,0,0,0.1), 0 1px 2px -1px rgb(0,0,0,0.1)">
        <tbody>
          <tr>
            <td>
              <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%" style="border-radius:0.75rem;background-image:url(&quot;https://res.cloudinary.com/dfaapefzb/image/upload/v1666531525/banner-min_jr5mt8.jpg&quot;);background-size:cover">
                <tbody>
                  <tr>
                    <td><img alt="Portion" src="https://res.cloudinary.com/dqg2db5gf/image/upload/v1678008424/Portion/portion_logo_1_k70sid.png" style="margin-left:auto;margin-right:auto;width:6rem;max-width:24rem;padding-left:2.5rem;padding-right:2.5rem;padding-top:1rem;padding-bottom:1rem;display:block;outline:none;border:none;text-decoration:none" /></td>
                  </tr>
                </tbody>
              </table>
              <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="margin-top:1rem;width:100%;border-radius:5px;background-color:rgb(249,250,251);padding:1rem;max-width:37.5em;border:1px solid #eee">
                <tr style="width:100%">
                  <td>
                    <p style="text-align:center;font-weight:600;color:rgb(31,41,55);font-size:18px;line-height:24px;margin:16px 0">Great news, you&#x27;re in!</p>
                    <p style="color:rgb(107,114,128);font-size:14px;line-height:24px;margin:16px 0;text-align:left">The wait is over! Sign up to Portion and start your subscription now!</p>
                    <p style="color:rgb(107,114,128);font-size:14px;line-height:24px;margin:16px 0;text-align:left">To sign up, head over to the Portion app and enter your email:</p>
                    <p style="text-align:center;font-weight:600;color:rgb(31,41,55);font-size:14px;line-height:24px;margin:16px 0">${userEmail}</p>
                  </td>
                </tr>
              </table>
              <hr style="margin-top:1.5rem;margin-bottom:1.5rem;width:100%;border:none;border-top:1px solid #eaeaea" /><a href="mailto:support@portion-app.com" target="_blank" style="margin-left:auto;margin-right:auto;display:inline-block;width:100%;border-radius:0.375rem;background-color:rgb(36,55,70);color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;padding:0px 0px;line-height:100%;max-width:100%"><span></span><span style="color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;display:inline-block;padding:10px 0px;max-width:100%;line-height:120%;text-transform:none;mso-padding-alt:0px;mso-text-raise:0">Contact Support</span><span></span></a><a href="https://www.portion-app.com/unsubscribe/${userEmail}" target="_blank" style="margin-left:auto;margin-right:auto;width:100%;color:rgb(107,114,128);font-size:12px;text-decoration:none;text-align:center;display:inline-block;padding:0px 0px;line-height:100%;max-width:100%"><span></span><span style="font-size:12px;text-decoration:none;text-align:center;display:inline-block;padding:10px 0px;max-width:100%;line-height:120%;text-transform:none;mso-padding-alt:0px;mso-text-raise:0">Unsubscribe</span><span></span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  
  </html>
          `;
}
