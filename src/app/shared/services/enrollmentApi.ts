import { UpdateEnrollmentParams } from '../../../protocols';
import api from './api';

export async function getEnrollment(token: string) {
  const response = await api.get('/enrollment', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postEnrollment(body: UpdateEnrollmentParams, token: string) {
  const response = await api.post('/enrollment', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
