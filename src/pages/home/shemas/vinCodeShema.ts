import * as Yup from 'yup';

const vinCodeShema = Yup.object({
  vinCode: Yup.string()
    .required('Should not be empty')
    .matches(/^[A-Za-z0-9]+$/, 'The VIN code must contain only Latin letters.')
    .length(17, 'VIN decoder must contain no more than 17 characters')
    .matches(
      /^[A-HJ-NPR-Z0-9]+$/,
      'VIN code must not contain prohibited letters I, O and Q',
    ),
});

export { vinCodeShema };
