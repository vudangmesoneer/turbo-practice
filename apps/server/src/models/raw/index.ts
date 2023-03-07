import { ObjectId } from 'mongodb';

export interface User {
  username: string;
  name: string;
  secret: string;
}

/**
 * Upload File
 * name: file name from request
 * data: base-64 string
 * dataType: file mime type from request
 */
export interface UploadFile {
  name: string;
  data: string;
  dataType: string;
}

/**
 * Confidential Information
 * value: string text of the secret
 * fileId: attached file if has
 * expiredAt: expiration time of this secret
 * isUsedOne: this secret is available on the first time or wait until the expiration
 */
export interface CI {
  value: string;
  fileId: ObjectId | undefined;
  expiredAt: Date;
  isUsedOne: boolean;
}

export type SPECIAL_USER = 'all-user' | 'none-user';

export type USER_ACTION = 'create' | 'edit' | 'delete' | 'view';

/**
 * User - Confidential Information
 * userId: User _id or all-user or none-user. A secret can be view by all user or a specific user.
 * ciId: CI _id
 * action: one of four actions
 */
export interface UserCI {
  userId: ObjectId | SPECIAL_USER;
  ciId: ObjectId;
  action: USER_ACTION[];
}