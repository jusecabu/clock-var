enum TimePeriod {
    AM = 'AM',
    PM = 'PM',
}

enum TimeFormat {
    Minify = 12,
    Extended = 24,
}

export class Clock {
    format: TimeFormat;
    leadingZero: boolean;

    constructor() {
        this.format = TimeFormat.Minify;
        this.leadingZero = false;
    }

    get date(): Date {
        const date = new Date();

        return date;
    }

    get period(): string {
        const hour = this.date.getUTCHours();

        if (hour < 12) return `"${TimePeriod.AM}"`;

        return `"${TimePeriod.PM}"`;
    }

    get hours(): number | string {
        let hours: number | string = this.date.getUTCHours();

        if (this.format === TimeFormat.Minify) {
            hours -= 12;
        }

        if (this.leadingZero) {
            hours = hours.toString().padStart(2, '0');

            return `"${hours}"`;
        }

        return hours;
    }

    get minutes(): number | string {
        let minutes: number | string = this.date.getUTCMinutes();

        if (this.leadingZero) {
            minutes = minutes.toString().padStart(2, '0');

            return `"${minutes}"`;
        }
        return minutes;
    }

    get seconds(): number | string {
        let seconds: number | string = this.date.getUTCSeconds();

        if (this.leadingZero) {
            seconds = seconds.toString().padStart(2, '0');

            return `"${seconds}"`;
        }
        return seconds;
    }
}

export function clockVar(clock: Clock): string {
    const string = `
const clock = {
    hour: ${clock.hours},
    minute: ${clock.minutes},
    second: ${clock.seconds},
    period: ${clock.period}
};
    `;

    return string;
}
