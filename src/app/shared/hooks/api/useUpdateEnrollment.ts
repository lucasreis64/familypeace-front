import useAsync from '../useAsync';
import useToken from '../useToken';

import * as enrollmentApi from '../../services/enrollmentApi';
import { UpdateEnrollmentParams } from '../../../../protocols';

export default function useUpdateEnrollment() {
  const token = useToken();

  const {
    loading: updateEnrollmentLoading,
    error: updateEnrollmentError,
    act: updateEnrollment
  } = useAsync((data: UpdateEnrollmentParams) => enrollmentApi.postEnrollment(data, token), false);

  return {
    updateEnrollmentLoading,
    updateEnrollmentError,
    updateEnrollment
  };
}
