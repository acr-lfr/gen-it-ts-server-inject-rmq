export interface MsAuthenticationRoleAssigned {
  roles?: string[];
  user?: User;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
}
