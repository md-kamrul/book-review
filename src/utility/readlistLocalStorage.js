const getStoredReadList = () => {
    const storedReadList = localStorage.getItem("readLists");

    if (storedReadList) {
        return JSON.parse(storedReadList);
    }

    return [];
}

const saveReadList = id => {
    let noOryes = 0;
    const storedReadLists = getStoredReadList();
    const existOrNot = storedReadLists.find(bookId => bookId === id);

    if (!existOrNot) {
        storedReadLists.push(id);
        localStorage.setItem("readLists", JSON.stringify(storedReadLists));
    }

    else {
        noOryes = noOryes + 1;
    }

    return noOryes;
}

export { getStoredReadList, saveReadList }