import { NextApiRequest, NextApiResponse } from 'next';

import * as nlang from '../../nlang';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<APIResponse>
) {
  if (req.method !== 'POST') {
    res.status(405).json({
      status: 'failure',
      statusCode: 405,
      message: "Please use the HTTP 'POST' method to access this API.",
    });
    return;
  }

  const expression = req.body.expression || '';
  if (!req.body.expression) {
    res.status(400).json({
      status: 'failure',
      statusCode: 400,
      message:
        "You should supply a JSON object with the 'expression' property on the request body.",
    });
    return;
  }

  if (typeof expression !== 'string') {
    res.status(400).json({
      status: 'failure',
      statusCode: 400,
      message: 'Body should be a JSON object.',
    });
    return;
  }

  // Try to parse Nlang expression here.
  const errors = nlang.parseAndGetSyntaxErrors(expression);
  if (errors.length !== 0) {
    res.status(422).json({
      status: 'failure',
      statusCode: 422,
      message: 'Failed to parse the Nlang expression!',
      error: errors,
    });
    return;
  }

  // If there are no errors, we can return the translation results.
  const tokens = nlang.parseAndGetTokens(expression);
  const translated = tokens.map(nlang.translateNlang);

  res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Successfully parsed the Nlang expression!',
    data: {
      translated,
      tokens,
    },
  });
}
