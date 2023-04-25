import api from './api';

export async function signUp(email: string, password: string) {
  const response = await api.post('/sign-up', { email, password });
  return response.data;
}
