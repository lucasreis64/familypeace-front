import { ValidationsParams } from '../../../../protocols';

const validations: ValidationsParams = {
  name: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid name',
    },
  },

  phone: {
    custom: {
      isValid: (value: string) => parseInt(value?.length.toString(), 10) >= 15,
      message: 'Type a valid phone number',
    },
  },

  birthday: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid birthdate',
    },
  },

  profilePicture: {
    custom: {
      isValid: (value: string) => isValidString(value),
      message: 'Type a valid url',
    },
  },
};

export default validations;

function isValidString(value: string) {
  if (typeof value === 'string' && value.length >= 3)
    return true;
  return false;
}
