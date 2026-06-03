export enum HttpCode {
  success = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "something went wrong",
  NO_DATA_FOUND = "no data is found",
  CREATE_FAILED = "create is failed",
  ALREADY_EXIST = "Memnber already exist!",
  UPDATE_FAILED = "update is failed",
  USED_NICK_PHONE = "The number is already in use",
  NO_MEMBER_NICK = "No member with that Nickname",
  WRONG_PASSWORD = "wrong password, plaese try again",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
