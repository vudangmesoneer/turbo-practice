import { ObjectId } from 'mongodb';

export interface User {
  username: string;
  name: string;
  secret: string;
}

/**
 * Confidential Information
 */
export interface CI {
  value: string;
  fileId: ObjectId | undefined;
}

export type SPECIAL_USER = 'all-user' | 'none-user';
export type USER_ACTION = 'create' | 'edit' | 'delete' | 'view';

export interface UserCI {
  userId: ObjectId | SPECIAL_USER;
  ciId: ObjectId;
  action: USER_ACTION;
}