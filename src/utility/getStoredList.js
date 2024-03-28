const getStoredList = (listName) => {
    const storedList = localStorage.getItem(`${listName}`);

    if (storedList) {
        return JSON.parse(storedList);
    }

    return [];
}

export { getStoredList }