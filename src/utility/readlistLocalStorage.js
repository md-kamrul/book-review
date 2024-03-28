const getStoredReadList = () => {
    const storedReadList = localStorage.getItem("readLists");

    if (storedReadList) {
        return JSON.parse(storedReadList);
    }

    return [];
}

const saveReadList = id => {
    const storedReadLists = getStoredReadList();
    const existOrNot = storedReadLists.find(bookId => bookId === id);


    if (!existOrNot) {
        storedReadLists.push(id);
        localStorage.setItem("readLists", JSON.stringify(storedReadLists));
        return 1;
    }
    else { 
        return 2
    }
}

export { getStoredReadList, saveReadList }