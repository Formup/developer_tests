import { DateTime } from 'luxon';
import { 
    type AvailabilityData,
    type Slots,
} from './types'

export default function generateSlots(now: DateTime, availabilityData: AvailabilityData): Slots {
    // TODO: Implement me!
    return {
        [now.toFormat('yyyy-MM-dd')]: {
            60: [{
                from: now,
                to: now.plus({ minutes: 60 }),
            }],
        },
    }
}