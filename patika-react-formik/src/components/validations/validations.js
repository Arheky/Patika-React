import { object, ref, string } from 'yup';

const validations = object({
  email: string().email('Geçerli bir email giriniz.').required('Zorunlu alan.'),
  password: string().min(5, 'Parolanız en az 5 karakter olmalıdır.').required('Zorunlu alan.'),
  passwordConfirm: string().oneOf([ref('password')], 'Parolalar uyuşmuyor.').required('Zorunlu alan.'),
});

export default validations;