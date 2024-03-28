const getStoredList = (listName) => {
    const storedList = localStorage.getItem(`${listName}`);
    console.log(storedList);

    if (storedList) {
        return JSON.parse(storedList);
    }

    return [];
}

export { getStoredList }