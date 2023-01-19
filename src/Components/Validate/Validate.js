export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxCurrentSymbols = (n) =>  (value) => {
        if (value.length>n) return `Max length is ${n} symbols`
        return undefined
}
