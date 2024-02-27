export const isValidName = (e, setError) => {
    const pattern = /^[А-Я][а-я]*$|^[A-Z][a-z]*$/gm;

    setError(state => ({
        ...state,
        [e.target.name]: !pattern.test(e.target.value)
    }));
}

export const minLengthRegister = (e, setError, length) => {
    setError(state => ({
        ...state,
        [e.target.name]: e.target.value.length < length || e.target.value.includes(' ')
    }));
}

export const isPaswordsMatch = (e, password, setError) => {
    setError(state => ({
        ...state,
        [e.target.name]: e.target.value !== password
    }));
}

export const isValidEmail = (e, setError) => {
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

    setError(state => ({
        ...state,
        [e.target.name]: !pattern.test(e.target.value)
    }));
}

export const isDifferentThanEmptySymbol = (e, setError) => {
    const pattern = /^\S+/gm;

    setError(state => ({
        ...state,
        [e.target.name]: !e.target.value.match(pattern)
    }));
}

export const isDifferentThanDigit = (e, setError) => {
    const pattern = /^\d+$/gm;

    setError(state => ({
        ...state,
        [e.target.name]: !e.target.value.match(pattern)
    }));
}