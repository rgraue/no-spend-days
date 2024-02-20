import { NON_VALID_DAY_OF_WEEK, WEEKEND_DAYS, WEEK_DAYS, getDayOfWeek, isWeekend } from "@utils";
import dayjs from "dayjs"

describe('Test Date Utilities', () => {
  it('getDayOfWeek returns day of week', () => {
    // a monday
    const dayToTest = dayjs('2024-02-19').day();

    const result = getDayOfWeek(dayToTest);

    expect(result).toBe(WEEK_DAYS.MONDAY);
  });

  it('getDayOfWeek returns NON_VALID_DAY_OF_WEEK when non-valid day given', () => {
    const result = getDayOfWeek(7); // 0 indexed 

    expect(result).toBe(NON_VALID_DAY_OF_WEEK.NON_VALID_DAY_OF_WEEK);
  });

  it('isWeekend works with dayjs', () => {
    const trueExpected = isWeekend(dayjs('2024-02-18')); // sun
    const falseExpected = isWeekend(dayjs('2024-02-19')); // mon


    expect(trueExpected).toBe(true);
    expect(falseExpected).toBe(false);
  });

  it('isWeekend works with Number', () => {
    const trueExpected = isWeekend(6); // sat
    const falseExpected = isWeekend(3); // wed

    expect(trueExpected).toBe(true);
    expect(falseExpected).toBe(false);
  });

  it('isWeekend works with ALL_DAYS enum', () => {
    const trueExpected = isWeekend(WEEKEND_DAYS.SATURDAY);
    const falseExpected = isWeekend(WEEK_DAYS.FRIDAY);

    expect(trueExpected).toBe(true);
    expect(falseExpected).toBe(false);
  })
})