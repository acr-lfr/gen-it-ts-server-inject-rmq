import express = require('express');
import { PermissionHandlerService } from '@/common-utils/expressMiddleware';
import RolesPermissionsCache from '@/cache/RolesPermissionsCache';
import { ForbiddenException } from '@/http/nodegen/errors';
import NodegenRequest from '@/http/nodegen/interfaces/NodegenRequest';

/**
 * Express middleware to control the http headers for caching only
 * @returns {Function}
 */
export default (permission: string) => {
  return (req: NodegenRequest, res: express.Response, next: express.NextFunction) => {
    PermissionHandlerService.middleware({
      res, req, permission, next,
      rolesPermissionsCache: RolesPermissionsCache,
      forbiddenToCall: ForbiddenException
    });
  }
}
