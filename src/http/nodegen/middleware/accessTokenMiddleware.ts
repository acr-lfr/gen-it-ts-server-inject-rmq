import express = require('express');
import { AccessTokenService  } from "common-utils/dist";
import { ValidateRequestOptions } from 'common-utils/dist/expressMiddleware/AccessTokenService';
import config from '@/config';
import NodegenRequest from '@/http/interfaces/NodegenRequest';

export default (headerNames: string[], options?: ValidateRequestOptions) => {
  return (req: NodegenRequest, res: express.Response, next: express.NextFunction) => {
    /**
     * The validate request should call the next function on successful token validation
     */
    AccessTokenService.validateRequest({
      req,
      res,
      next,
      headerNames,
      options,
      serverApiKey: config.apiKey,
      jwtSecret: config.jwtSecret
    });
  };
}
