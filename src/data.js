const pagesKey = 'pages';

let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

export default {
    addPage(page) {
        pagesStore.push(page)
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    },
    removePage(index) {
        pagesStore.splice(index, 1);
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    },
    getAllPages() {
        return pagesStore;
    },
    getSinglePage(index) {
        return pagesStore[index];
    },
    editPage(index, page) {
        pagesStore[index] = page;
        localStorage.setItem(pagesKey, JSON.stringify(pagesStore))
    }
}