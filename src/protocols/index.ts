export type userDataParams =
{
  user: {
    id: number,
    email: string,
    name: string,
    profilePicture: string,
  },
  token: string,
};

export type UpdateEnrollmentParams = {
  name: string;
  birthday: string | Date;
  phone: string;
  profilePicture: string;
} & {
  [key: string]: string;
};

export interface InputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

export interface UseFormParams {
  validations: ValidationsParams;
  onSubmit: (data: UpdateEnrollmentParams) => void;
  initialValues: UpdateEnrollmentParams; 
}

export type ValidationsParams = {
  name: {
      custom: {
          isValid: (value: string) => boolean;
          message: string;
      };
  };
  phone: {
      custom: {
          isValid: (value: string) => boolean;
          message: string;
      };
  };
  birthday: {
      custom: {
          isValid: (value: string) => boolean;
          message: string;
      };
  };
  profilePicture: {
      custom: {
          isValid: (value: string) => boolean;
          message: string;
      };
  } 
} & {
  [key: string]: {
    custom: {
      isValid: (value: string) => boolean;
      message: string;
    };
  };
};

