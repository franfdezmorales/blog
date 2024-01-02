const dateFormat = (date: string, locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined) => {
    return new Date(date).toLocaleString(locales, options)
}

export default dateFormat