import { DateTime } from 'luxon';

export interface AvailabilityData {
    calendarLengthDays: number, // Until how many days ahead to generate slots
    availability: Availability[], // When the bookable is available each week
    durationsMinutes: number[], // How long bookings can be made
    mustBookHoursBefore: number, // How many hours before a booking must be made
    bookings: TimeSlot[], // Existing bookings that block new slots
    startIntervalMinutes: number, // Starting from the beginning of an availability, available slot start intervals
    timezone: string, // Timezone of the bookable
}

export interface TimeSlot {
    from: DateTime,
    to: DateTime,
}

export interface Availability {
    // Represents a weekly span of time, for instance, Monday 8-16.
    from: TimeInWeek,
    to: TimeInWeek,
}

export interface TimeInWeek {
    weekday: number, // Monday is 1
    hour: number, // 0-23
    minute?: number, // 0-59
}

// The format of the output is dictated by the UI that consumes the generated data.
export interface Slots {
    [date: string]: { // Dates in format 'yyyy-MM-dd' for when there are bookable slots
        [duration: number]: TimeSlot[], // Slots for each duration
    },
}