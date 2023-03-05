import type { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import NextCors from "nextjs-cors";

type Data = {
  isSent: boolean;
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
    origin: "http://localhost:4200", //! TODO - replace the url with the actual address of portion website
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
      res.json({ isSent: false });
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
        <!DOCTYPE html>
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office">
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="x-apple-disable-message-reformatting">
            <title></title>
            <link href="https://fonts.googleapis.com/css?family=Inter:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet">
            <style>
                html,
                body {
                    margin: 0 auto !important;
                    padding: 0 !important;
                    height: 100% !important;
                    text-align: center;
                    width: 100% !important;
                    background: white;
                }
        
                * {
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                }
        
                div[style*="margin: 16px 0"] {
                    margin: 0 !important;
                }
        
                table,
                td {
                    mso-table-lspace: 0pt !important;
                    mso-table-rspace: 0pt !important;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                a {
                    text-decoration: none;
                }
        
                *[x-apple-data-detectors],
                .unstyle-auto-detected-links *,
                .aBn {
                    border-bottom: 0 !important;
                    cursor: default !important;
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                .a6S {
                    display: none !important;
                    opacity: 0.01 !important;
                }
        
                .im {
                    color: inherit !important;
                }
        
                img.g-img+div {
                    display: none !important;
                }
        
                @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                    u~div .email-container {
                        min-width: 320px !important;
                    }
                }
        
                @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                    u~div .email-container {
                        min-width: 375px !important;
                    }
                }
        
                @media only screen and (min-device-width: 414px) {
                    u~div .email-container {
                        min-width: 414px !important;
                    }
                }
            </style>
            <style></style>
        </head>
        
        <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly;">
            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                <div
                    style=" display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 25px; background-image: url(https://res.cloudinary.com/dfaapefzb/image/upload/v1666531525/banner-min_jr5mt8.jpg); height: 200px; width: 100%; ">
                    <img src="https://res.cloudinary.com/dfaapefzb/image/upload/v1666530846/portion-icon_szkmnn.svg" alt="logo"
                        width="60px">
                    <h1 style="font-family: inter; color: white; ">Sign Up to Portion</h1>
                </div>
                <h2 style="font-family: inter; color: #243746; ">Great news, you're in!</h2>
                <p style="color: #243746; font-family: inter;">The wait is over! Sign up to Portion and start
                    your subscription
                    now!</p>
                <p style="color: #243746; font-family: inter;">To sign up, head over to the Portion app and
                    enter your
                    email:
                </p>
                <p style="color: #243746; font-family: inter;">${userEmail}
                </p>
                <br />
        
                <a href="mailto:support@portion-app.com"><button
                        style="cursor: pointer; font-family: inter; font-weight: bold; border: none; background-color: #FECD04; padding: 1rem 2rem; border-radius: 100px;">Contact
                        Support</button></a>
                        <br /><br/>
                <p style="color: #243746; font-family: inter; font-size: 10px"> You are receiving this email because you are registered at Portion. You will no longer be in the waitlist if you unsubscribe. </p>
                <a href="https://www.portion-app.com/unsubscribe/${userEmail}">Unsubscribe</a>
            </div>
        </body>
        
        </html>
          `;
}
