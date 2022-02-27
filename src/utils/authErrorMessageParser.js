export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi';
    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı';
    default:
      return errorCode;
  }
}
