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

        if(el.watch.quantity<1){
            continue
        }
        
        totalPrice += el.watch.price * el.qty;
    }
    return totalPrice;
}

export const checkAvailability = (user) => {

    for (let item of user.cart) {
        if (item.watch.quantity < item.qty) {
            return false;
        }
    }

    return true;
}

export const getWatchesForOrder = (arr) => {
    const watches = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].qty === 0) {
            continue;
        }

        const watch = {
            _id: arr[i].watch._id,
            title: arr[i].watch.title,
            price: arr[i].watch.price,
            quantity: arr[i].qty,
            imageUrl: arr[i].watch.imageUrl
        };
        watches.push(watch);
    }
    return watches;
}