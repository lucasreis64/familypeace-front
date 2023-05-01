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
      isValid: (value: string) => parseInt(value?.length.toString(), 10) >= 14,
      message: 'Type a valid name',
    },
  },

  birthday: {
    custom: {
      isValid: (value: string) => isValidDate(value),
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

function isValidDate(dateString: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return false;
  }
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (
    year.toString() !== dateString.substring(0, 4) ||
    month.toString().padStart(2, '0') !== dateString.substring(5, 7) ||
    day.toString().padStart(2, '0') !== dateString.substring(8, 10)
  ) {
    return false;
  }
  return true;
};
