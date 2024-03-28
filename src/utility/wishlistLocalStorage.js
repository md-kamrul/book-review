const getStoredWishList = () => {
    const storedWishList = localStorage.getItem("wishLists");

    if (storedWishList) {
        return JSON.parse(storedWishList);
    }

    return [];
}

const saveWishList = id => {
    let noOryes = 0;
    const storedWishLists = getStoredWishList();
    const existOrNot = storedWishLists.find(bookId => bookId === id);

    if (!existOrNot) {
        storedWishLists.push(id);
        localStorage.setItem("wishLists", JSON.stringify(storedWishLists));
    }

    else {
        noOryes = noOryes + 1;
    }

    return noOryes;
}

export { getStoredWishList, saveWishList }