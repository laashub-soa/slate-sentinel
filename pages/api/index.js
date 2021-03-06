import * as Constants from "~/common/constants";

import Cors from "cors";
import initMiddleware from "~/common/init-middleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  res.status(200).send(
    JSON.stringify(
      {
        decorator: "API",
        data: [
          ...Constants.STATIC,
          ...Constants.ANALYSIS,
          ...Constants.CHAIN,
          ...Constants.ROUTES,
        ],
      },
      null,
      4
    )
  );
}
