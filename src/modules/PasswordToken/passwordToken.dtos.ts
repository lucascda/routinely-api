import { PasswordToken } from './passwordToken.entity';

export class CreatePasswordTokenInput {
  accountId: string;
}

export class CreatePasswordTokenRepositoryInput {
  accountId: string;
  token: string;
}

export type CreatePasswordTokenOutput = PasswordToken;
