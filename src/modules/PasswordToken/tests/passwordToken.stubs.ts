import { faker } from '@faker-js/faker';
import { CreatePasswordTokenInput } from '../passwordToken.dtos';

export const createTokenInput = {
  token: faker.string.alphanumeric(10),
  accountId: faker.string.uuid(),
};

export const createTokenOutput = {
  ...createTokenInput,
  id: 12,
  token: 'hashed_token',
  expireAt: faker.date.soon(),
};
