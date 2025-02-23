import moment from "moment-timezone";

export function formatDateToPrintable(dateTime: number, timezone: string): string {
    const m = moment(dateTime).tz(timezone);
    return m.format("M/D/YYYY") + " at " + m.format("h:mm A");
}

export function adjustDateAndTimeForTimezone(dateStr: string | null | undefined,
                                             timeStr: string | null | undefined,
                                             tz: string | null | undefined) : number | undefined {
    let dateTime;
    if (dateStr && timeStr && tz) {
        let m = moment.tz(dateStr + "T" + timeStr + ":00", tz);
        dateTime = m.valueOf();
    }
    return dateTime;
}

export function createZeroUtcDate(date: Date): Date {
    const d = new Date(date.getTime());
    d.setUTCHours(0, 0, 0, 0);
    return d;
}