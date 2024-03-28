import { getStoredList } from "./getStoredList";

let noOryes = 1;
const saveWishList = (id, listName) => {
    const storedWishLists = getStoredList(listName);
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

export { saveWishList }