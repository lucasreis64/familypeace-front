import { ChangeEvent, useState } from 'react';
import { UseFormParams } from '../../../protocols';

export const useForm = (options: UseFormParams) => {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (key: string, sanitizeFn?: (param: string) => string) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;

    setData({
      ...data,
      [key]: value,
    });
    return {
      ...data,
      [key]: value,
    };
  };

  const customHandleChange = (key: string, sanitizeFn: (param: string) => string) => (inputValue: string) => {
    const value = sanitizeFn ? sanitizeFn(inputValue) : inputValue;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {} as any;
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        /*
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }
        */
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        console.log(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(data);
    }
  };

  return {
    setData,
    data,
    handleChange,
    customHandleChange,
    handleSubmit,
    errors,
  };
};
