const getStoredWishList = () => {
    const storedWishList = localStorage.getItem("wishLists");

    if (storedWishList) {
        return JSON.parse(storedWishList);
    }

    return [];
}

const saveWishList = id => {
    const storedWishLists = getStoredWishList();
    const existOrNot = storedWishLists.find(bookId => bookId === id);
    console.log(storedWishLists);

    if (!existOrNot) {
        storedWishLists.push(id);
        localStorage.setItem("wishLists", JSON.stringify(storedWishLists));
        return 1;
    }
    else { 
        return 2
    }
}

export { getStoredWishList, saveWishList }