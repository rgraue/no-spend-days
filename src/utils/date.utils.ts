import { Dayjs } from 'dayjs';

export enum WEEK_DAYS {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
}

export enum WEEKEND_DAYS {
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}

export enum NON_VALID_DAY_OF_WEEK {
  NON_VALID_DAY_OF_WEEK = 'NON_VALID_DAY_OF_WEEK',
}

export type ALL_DAYS = WEEKEND_DAYS | WEEK_DAYS | NON_VALID_DAY_OF_WEEK;

export const getDayOfWeek = (n: Number): ALL_DAYS => {
  let dayOfWeek: ALL_DAYS = NON_VALID_DAY_OF_WEEK.NON_VALID_DAY_OF_WEEK;
  switch (n) {
    case 0:
      dayOfWeek = WEEKEND_DAYS.SUNDAY;
      break;
    case 1:
      dayOfWeek = WEEK_DAYS.MONDAY;
      break;
    case 2:
      dayOfWeek = WEEK_DAYS.TUESDAY;
      break;
    case 3:
      dayOfWeek = WEEK_DAYS.WEDNESDAY;
      break;
    case 4:
      dayOfWeek = WEEK_DAYS.THURSDAY;
      break;
    case 5:
      dayOfWeek = WEEK_DAYS.FRIDAY;
      break;
    case 6:
      dayOfWeek = WEEKEND_DAYS.SATURDAY;
      break;
  }

  return dayOfWeek;
};

// true if weekend
// false if weekday
export const isWeekend = (date: Dayjs | Number | ALL_DAYS) => {
  if (date instanceof Dayjs) {
    return determineWeekendFromEnunm(getDayOfWeek(date.day()));
  } else if (date instanceof Number) {
    return determineWeekendFromEnunm(getDayOfWeek(date));
  } else {
    return determineWeekendFromEnunm(date);
  }
};

const determineWeekendFromEnunm = (dayOfWeek: ALL_DAYS) => {
  if (dayOfWeek in WEEKEND_DAYS) {
    return true;
  }

  return false;
};
