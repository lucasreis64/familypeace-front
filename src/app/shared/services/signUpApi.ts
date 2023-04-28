import api from './api';

export async function signUp(email: string, password: string, name: string) {
  const response = await api.post('/sign-up', { email, password, name });
  return response.data;
}
