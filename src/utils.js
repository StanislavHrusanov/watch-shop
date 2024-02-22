export const splitDescription = (description) => {
    const paragraphs = [];
    const splitedDescription = description.split('\n');
    splitedDescription.forEach(p => paragraphs.push({ paragraph: p }));

    return paragraphs;
}

export const joinDescription = (description) => {
    let joinedDescription = '';
    description.forEach(p => joinedDescription += p.paragraph + '\n');

    return joinedDescription.substring(0, joinedDescription.length - 1);
}

export const trimInputs = (inputsObj) => {
    for (let key in inputsObj) {
        inputsObj[key] = inputsObj[key].trim();
    }
    return inputsObj;
}

export const getSum = (arr) => {
    let sum = 0;

    for (let el of arr) {
        sum += el.qty;
    }
    return sum;
}

export const getTotalPrice = (arr) => {
    let totalPrice = 0;

    for (let el of arr) {
        totalPrice += el.watch.price * el.qty;
    }
    return totalPrice;
}