import { DateTime } from 'luxon';
import generateSlots from '../generateSlots';
import { AvailabilityData } from '../types';

describe('generateSlots', () => {
    // You modify this sample data for the needs of each of your tests.
    let bookableData1: AvailabilityData;
    
    beforeEach(() => {
        bookableData1 = buildDefaultAvailability();
    });

    it('should not throw', () => {
        bookableData1.durationsMinutes = [60];
        const now = DateTime.local(2023, 12, 12, 6, 30);
        expect(() => generateSlots(now, bookableData1)).not.toThrow();
    });
});

function buildDefaultAvailability() {
    const weekdays = Array.from({ length: 7 }, (_, i) => i + 1);
    return {
        calendarLengthDays: 7,
        availability: weekdays.map((weekday) => ({
            from: {
                weekday,
                hour: 8,
            },
            to: {
                weekday,
                hour: 16,
            },
        })),
        durationsMinutes: [30, 60],
        mustBookHoursBefore: 1,
        bookings: [],
        startIntervalMinutes: 30,
        timezone: 'Europe/Helsinki',
    }
}