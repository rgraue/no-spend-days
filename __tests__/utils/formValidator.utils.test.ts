import { validateFormInput } from "@utils"


describe('Test FormValidator Utilities', () => {
  it('correctly validates good form', () => {
    const result = validateFormInput([
      {
        value: 'test',
        type: 'text'
      },
      {
        value: true,
        type: 'true'
      },
      {
        value: false,
        type: 'false'
      },
      {
        value: 10,
        type: 'number'
      },
      {
        value: 10,
        type: 'number_positive'
      },
      {
        value: -10,
        type: 'number_negative'
      },
      {
        value: '100.20',
        type: 'money'
      },
      {
        value: '$100.20',
        type: 'money'
      }
    ]);

    expect(result).toBe(true);
  });

  it('correctly invalidates bad form (money)', () => {
    const result = validateFormInput([
      {
        value: '100.921',
        type: 'money'
      }
    ]);

    expect(result).toBe(false);
  });

  it('correctly invalidates bad form (text)', () => {
    const result = validateFormInput([
      {
        value: '',
        type: 'text'
      }
    ]);

    expect(result).toBe(false);
  });

  it('correctly invalidates bad form (number)', () => {
    const result = validateFormInput([
      {
        value: 'bad input',
        type: 'number'
      }
    ]);

    expect(result).toBe(false);
  });

  it('correctly invalidates bad form (true/false)', () => {
    const result = validateFormInput([
      {
        value: true,
        type: 'false'
      },
      {
        value: false,
        type: 'true'
      }
    ]);

    expect(result).toBe(false);
  });

  it('correctly invalidates bad form (negative number)', () => {
    const result = validateFormInput([
      {
        value: 100,
        type: 'number_negative'
      }
    ]);

    expect(result).toBe(false);
  });

  it('correctly invalidates bad form (negative positive)', () => {
    const result = validateFormInput([
      {
        value: -100,
        type: 'number_positive'
      }
    ]);

    expect(result).toBe(false);
  });
})