import { getStoredList } from "./getStoredList";

let noOryes = 2;
const saveReadList = (id, listName) => {
    const storedReadLists = getStoredList(listName);
    const existOrNot = storedReadLists.find(bookId => bookId === id);
    console.log(existOrNot);
    if (!existOrNot && listName !== "wishLists") {
        storedReadLists.push(id);
        localStorage.setItem("readLists", JSON.stringify(storedReadLists));
        noOryes = noOryes - 1;
    }

    else {
        noOryes = noOryes + 1;
    }

    return noOryes;
}

export { saveReadList }