export const required = value => {
  if (value) return undefined;
  return 'Field is required';
};

export const maxFieldValue = n => value => {
  if (value && value.length > n) return `Max value is ${n} symbols`;
  return undefined;
};
