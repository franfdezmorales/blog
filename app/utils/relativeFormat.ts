type RelativeTimeFormatUnit =
    | "year"
    | "month"
    | "week"
    | "day"
    | "hour"
    | "minute"
    | "second"

const DATE_UNITS: Record<RelativeTimeFormatUnit, number> = {
    year: 86400 * 365,
    month: (86400 * 365) / 12,
    week: 86400 * 7,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
}

const getTimeStamp = (date: string) => new Date(date).getTime()

const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed: number) => {
    for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
        if (secondsElapsed >= secondsInUnit || unit === "second") {
            const value = Math.floor(secondsElapsed / secondsInUnit) * -1
            return { value, unit }
        }
    }

    return { value: 0, unit: 'day' }
}

function relativeFormat(date: string) {
    const rtf = new Intl.RelativeTimeFormat('es-ES')
    const timestamp = getTimeStamp(date)
    const secondsElapsed = getSecondsDiff(timestamp)
    const { value, unit } = getUnitAndValueDate(secondsElapsed)

    return rtf.format(value, unit as RelativeTimeFormatUnit)
}

export default relativeFormat