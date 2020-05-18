const mockEmail = 'admin@teste.com';
const mockPassword = '123';

export default function authMock({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === mockEmail && password === mockPassword) {
        return resolve(true);
      }

      console.log('error :>> ');

      return reject(new Error('Fail'));
    }, 1500);
  });
}
