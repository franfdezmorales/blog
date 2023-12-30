function randomString(length: number): string {
    const uint8Array = new Uint8Array(length)
    const randomValues = self.crypto.getRandomValues(uint8Array)
    return Array.from(randomValues, (num) => Math.floor(num / 16).toString(16)).join('');
}

export default randomString