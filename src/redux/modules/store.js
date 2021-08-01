class SearchResult {

    id; // int
    name; // string
    price; // int
    info; // string
    jjim; //icon
    pic; // picture

    constructor(id, name, price, info) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.info = info;
    }

}


// 내용은 예시로 작성
const results = [ new SearchResult(0, "도쿄등심", 80000, "식사 상품권"),
                    new SearchResult(1, "메드포갈릭", 80000, "프리미엄패키지 4인 식사권")];
let cnt = 0;

// return search result list
export const getResults = () => {

    return results;

}

// click jjim icon
export const clickJjim = (id) => {

}



