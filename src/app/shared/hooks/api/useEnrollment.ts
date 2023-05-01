import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentApi from '../../services/enrollmentApi';
import { UpdateEnrollmentParams } from '../../../../protocols';

export default function useEnrollment() {
  const token = useToken();

  const {
    data: enrollment,
    loading: enrollmentLoading,
    error: enrollmentError,
    act: getEnrollment
  } = useAsync(() => enrollmentApi.getEnrollment(token));

  return {
    enrollment,
    enrollmentLoading,
    enrollmentError,
    getEnrollment
  };
}
