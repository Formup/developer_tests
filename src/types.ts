import { DateTime } from 'luxon';

export interface AvailabilityData {
    calendarLengthDays: number, // Until how many days ahead to generate slots
    availabilityWindows: Availability[], // When the bookable is available each week
    durationMinutes: number, // How long bookings can be made
    mustBookHoursBefore: number, // How many hours before a booking must be made
    bookings: TimeSlot[], // Existing bookings that block new slots
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
    // Dates starting on the given day (yyyy-MM-dd).
    [date: string]: TimeSlot[],
}