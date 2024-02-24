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
    if (arr) {
        for (let el of arr) {
            sum += el.qty;
        }
    }
    return sum;
}

export const getTotalPrice = (arr) => {
    let totalPrice = 0;
    if (arr) {
        for (let el of arr) {

            if (el.watch.quantity < 1) {
                continue
            }

            totalPrice += el.watch.price * el.qty;
        }
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

export const getOrderStatus = (status) => {
    if (status === 'Pending') {
        return 'Обработва се';
    } else if (status === 'Sent') {
        return 'Изпратена';
    }
}

export const convertDate = (createdAt) => {
    const dateOfCreation = new Date(createdAt);

    const days = {
        Mon: 'Понеделник',
        Tue: 'Вторник',
        Wed: 'Сряда',
        Thu: 'Четвъртък',
        Fri: 'Петък',
        Sat: 'Събота',
        Sun: 'Неделя'
    };

    const months = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12'
    };

    const [day, month, date, year] = dateOfCreation.toDateString().split(' ');

    return `${days[day]}, ${date}.${months[month]}.${year}г.`;
}