const host = () => {
    return process.env.NODE_ENV === 'production' ? 'https://franfdezmorales.com' : 'http://localhost:3000'
}

export default host