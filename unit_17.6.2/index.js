const match = (stringOne, stringTwo) => {
    if (typeof stringOne === "string" && typeof stringTwo === "string") {
        return stringOne.toLowerCase() === stringTwo.toLowerCase();
    } else{
        return 'введеные данные не строка'
    }
};

export default match;
