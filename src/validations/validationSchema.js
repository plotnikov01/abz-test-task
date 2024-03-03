import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters')
    .max(60, 'Name should be at most 60 characters'),
  email: Yup.string()
    .required('Email is required')
    .matches(/^.{2,100}$/, 'Invalid email length (between 2 and 100 characters)')
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      'Invalid email format',
    ),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^[\+]{0,1}380([0-9]{9})$/, 'Invalid phone format'),
  position: Yup.string().required('Position is required'),
  photo: Yup.mixed()
    .required('Photo is required')
    .test('imageResolution', 'Image resolution must be at least 70x70px', async (value) => {
      if (!value) {
        return true;
      }

      return new Promise((resolve) => {
        const img = new Image();
        img.onload = function () {
          const isResolutionValid = img.width >= 70 && img.height >= 70;
          resolve(isResolutionValid);
        };
        img.src = URL.createObjectURL(value);
      });
    }),
});
