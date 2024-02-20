import { NON_VALID_DAY_OF_WEEK, WEEK_DAYS, getDayOfWeek } from "@utils";
import dayjs from "dayjs"

describe('Test Date Utilities', () => {
  it('getDayOfWeek returns day of week', () => {
    // a tuesday
    const dayToTest = dayjs('2024-20-19').day();

    const result = getDayOfWeek(dayToTest);

    expect(result).toBe(WEEK_DAYS.TUESDAY);
  });

  it('getDayOfWeek returns NON_VALID_DAY_OF_WEEK when non-valid day given', () => {
    const result = getDayOfWeek(7);

    expect(result).toBe(NON_VALID_DAY_OF_WEEK.NON_VALID_DAY_OF_WEEK);
  })
})