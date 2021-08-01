
// create initial state
const initialState = {
    cnt: 0,
    data: [
        {
            id: 0, //int
            name: "도쿄등심", //string
            price: 80000, //int
            info: "식사 상품권", //string
            jjim: true, // boolean
        },
        {
            id: 1,
            name: "메드포갈릭",
            price: 80000,
            info: "프리미엄패키지 4인 식사권",
            jjim: false,
        },
    ],
};

// create action (name)
const ADD_ITEM = 'ITEM/ADD';
const DELETE_ITEM = 'ITEM/DELETE';
const UPDATE_ITEM = 'ITEM/UPDATE';
const CLICK_JJIM = 'JJIM/CLICK'

// create action creator
const addItem = (id, name, price, info) => {
    return {
        type: ADD_ITEM,
        payload: {
            id: id,
            name: name,
            price: price,
            info: info,
            jjim: false,
        },
    };
};

const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: {
            id: id,
        },
    };
};

const updateItem = (id, name, price, info, jjim) => {
    return {
        type: UPDATE_ITEM,
        payload: {
            id: id,
            name: name,
            price: price,
            info: info,
            jjim: jjim,
        },
    };
};

const clickJjim = (id) => {
    return {
        type: CLICK_JJIM,
        payload: {
            id: id,
        },
    };
};

// my actions
export const actions = {
    addItem: addItem,
    deleteItem: deleteItem,
    updateItem: updateItem,
    clickJjim: clickJjim,
};

// create reducer
export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_ITEM: {
            const newState = {
                ...state,
                data: state.data.concat({
                    id: payload.id,
                    name: payload.name,
                    price: payload.price,
                    info: payload.info,
                    jjim: false,
                }),
            };
            return newState;
        };

        case DELETE_ITEM: {
            const newState = {
                ...state,
                data: state.data.filter((data) => data.id !== payload.id),
            }
            return newState;
        };

        case UPDATE_ITEM: {
            const newState = {
                ...state,
                data: state.data.map((data) => data.id === payload.id ?
                    { ...data,
                        name: payload.name,
                        price: payload.price,
                        info: payload.info
                    } : data
                ),
            };
            return newState;
        };

        case CLICK_JJIM: {
            const newState = {
                ...state,
                data: state.data.map((data) =>
                data.id === payload.id ? { ...data, jjim: !jjim } : data
                ),
            };
            return newState;
        };

        default:
            return state;
    }
};

let cnt = 0;
export default reducer;