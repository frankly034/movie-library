import { NOT_NULL_VIOLATION_CODE } from '../postgresErrorCode/notNullViolationCode';

export default class NotNullViolationError extends Error {
  code: string;
  constructor() {
    super();
    this.code = NOT_NULL_VIOLATION_CODE;
  }
}
