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