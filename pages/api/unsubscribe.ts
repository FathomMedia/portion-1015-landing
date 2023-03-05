import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
// http & https library for app sync calls
import axios from "axios";
// graphQl libraries
import gql from "graphql-tag";
import { print } from "graphql";

type Data = {
  success: boolean;
  errorMessage?: string;
};

type WaitingList = {
  id: string;
  _deleted: boolean | null;
  _version: number;
  email?: string | null;
  dateTime?: string | null;
  emailSent?: boolean | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

/**
 * It gets the user's email address from the query string, then deletes the user's email address from
 * the waiting list
 * @param {NextApiRequest} req - NextApiRequest - The request object.
 * @param res - NextApiResponse<Data>
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /* Getting the user's email address from the query string. */
  const userEmail = JSON.parse(req.body)["email"] as string;

  /* A middleware that allows the API to accept requests from the frontend. */
  await NextCors(req, res, {
    methods: ["POST"],
    optionsSuccessStatus: 200,
  });

  try {
    const waitingListWithEmail = await getWaitingListWithEmail(userEmail);

    /* Checking if the waiting list with the user's email address exists. If it does, it deletes it. */
    if (waitingListWithEmail) {
      const isDeleted = await deleteWaitingListWithEmail(waitingListWithEmail);

      if (isDeleted) {
        res.status(200);
        res.json({ success: true });
        res.end();
      } else {
        res.status(500);
        res.json({
          success: false,
          errorMessage: `Failed to delete waiting list with email ${waitingListWithEmail.email} with id ${waitingListWithEmail.id}.`,
        });
        res.end();
      }
    } else {
      res.status(500);
      res.json({
        success: false,
        errorMessage: "Email is not available in the waiting list.",
      });
      res.end();
    }
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      // @ts-ignore
      errorMessage: `${error.message}`,
    });
    res.end();
  }
}

/**
 * It queries the GraphQL API for a list of waiting lists that match the user's email address and
 * returns the first one that isn't deleted
 * @param {string} userEmail - string - the email address of the user
 * @returns A list of waiting lists
 */
async function getWaitingListWithEmail(userEmail: string) {
  const listWaitingListWithEmailQuery = gql`
    query ListWaitingLists {
      listWaitingLists(
        filter: { email: { eq: "${userEmail}" }, emailSent: { ne: true } }
      ) {
        items {
          emailSent
          _deleted
          _version
          email
          id
        }
      }
    }
  `;

  let graphqlMutation = await axios({
    url: process.env.GRAPHQL_API_URL,
    method: "post",
    headers: {
      "x-api-key": process.env.GRAPHQL_API_KEY,
    },
    data: {
      query: print(listWaitingListWithEmailQuery),
    },
  });

  const theListOfWaitingLists = (graphqlMutation.data.data.listWaitingLists
    .items ?? []) as WaitingList[];

  console.log("theListOfWaitingLists", theListOfWaitingLists);

  const found: boolean =
    theListOfWaitingLists.filter((item) => item._deleted !== true).length > 0;

  if (found) {
    return theListOfWaitingLists[0] as WaitingList;
  }
  return null;
}

/**
 * It deletes a waiting list object from the database
 * @param {WaitingList} waitlist - WaitingList
 * @returns A boolean value.
 */
async function deleteWaitingListWithEmail(
  waitlist: WaitingList
): Promise<boolean> {
  const deleteWaitingListWithEmailMutation = gql`
    mutation DeleteTheWaitingListObj {
  deleteWaitingList(input: {id: "${waitlist.id}", _version: ${waitlist._version} }) {
    id
    _deleted
  }
}
  `;

  let graphqlMutation = await axios({
    url: process.env.GRAPHQL_API_URL,
    method: "post",
    headers: {
      "x-api-key": process.env.GRAPHQL_API_KEY,
    },
    data: {
      query: print(deleteWaitingListWithEmailMutation),
    },
  });

  const deletedWaitingList = graphqlMutation.data.data
    .deleteWaitingList as WaitingList;

  if (deletedWaitingList._deleted) {
    return true;
  } else {
    return false;
  }
}
