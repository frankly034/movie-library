import { UNIQUE_VIOLATION_CODE } from '../postgresErrorCode/uniqueViolationCode';

export default class UniqueViolationError extends Error {
  code: string;
  constructor(message: string) {
    super(message);
    this.code = UNIQUE_VIOLATION_CODE;
  }
}
