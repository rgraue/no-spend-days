export interface FormInput {
  value: any;
  type:
    | 'text'
    | 'number'
    | 'true'
    | 'false'
    | 'money'
    | 'email'
    | 'number_positive'
    | 'number_negative';
}

export const validateFormInput = (form: FormInput[]): boolean => {
  let isValid = true;
  const validatorResults = form.map(input => {
    switch (input.type) {
      case 'text':
        return validateText(input.value);
      case 'number':
        return validateNumber(input.value);
      case 'true':
        return input.value === true;
      case 'false':
        return input.value === false;
      case 'email':
        // TODO: implement email checker if needed???
        return true;
      case 'number_negative':
        return validateNumberNegative(input.value);
      case 'number_positive':
        return validateNumberPositive(input.value);
      case 'money':
        return validateMoney(input.value);
      default:
        return true;
    }
  });

  for (let i = 0; i < validatorResults.length; i++) {
    if (validatorResults[i] === false) {
      const input = form[i];
      console.log('Form input', input.value, 'is not valid type', input.type);
      isValid = false;
    }
  }

  return isValid;
};

const validateText = (value: string): boolean => {
  return value.length > 0;
};

const validateNumberPositive = (value: number): boolean => {
  try {
    return value >= 0;
  } catch {
    return false;
  }
};

const validateNumberNegative = (value: number): boolean => {
  try {
    return value < 0;
  } catch {
    return false;
  }
};

const validateNumber = (value: number): boolean => {
  return !isNaN(value);
};

const validateMoney = (value: string): boolean => {
  try {
    const parsed = value.split('.');
    if (parsed.length === 2) {
      const dollars = parseInt(parsed[0].replace('$', ''));
      const cents = parseInt(parsed[1]);

      // check if cents and money is valid number
      if (isNaN(dollars) || isNaN(cents)) {
        return false;
      }

      // check valid cents
      if (cents < 0 || cents > 99) {
        return false;
      }

      return true;
    }

    return false;
  } catch {
    return false;
  }
};
