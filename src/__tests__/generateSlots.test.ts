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
        bookableData1.durationMinutes = 30;
        const now = DateTime.local(2023, 12, 12, 6, 30);
        expect(() => generateSlots(now, bookableData1)).not.toThrow();
    });
});

function buildDefaultAvailability(): AvailabilityData {
    const weekdays = Array.from({ length: 7 }, (_, i) => i + 1);
    return {
        calendarLengthDays: 7,
        availabilityWindows: weekdays.map((weekday) => ({
            from: {
                weekday,
                hour: 8,
            },
            to: {
                weekday,
                hour: 16,
            },
        })),
        durationMinutes: 60,
        mustBookHoursBefore: 1,
        bookings: [],
        timezone: 'Europe/Helsinki',
    }
}