import { formatDate } from './dateFormatter';

export function isObjectEqual(obj1: any, obj2: any) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
      if (!obj2.hasOwnProperty(prop)) {
        return false;
      }
      if (prop === 'birthday' && formatDate(obj1[prop]) === obj2[prop]) {
        continue;
      }
      
      else if (obj1[prop] !== obj2[prop]) {
        return false;
      }
    }
  }

  return true;
}
