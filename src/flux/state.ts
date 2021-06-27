export type CountState = {
    count: number
}
const initialState = {
    count: 0
}

export default initialState

/*
内部APIが操作する対象となるDBの定義のようなもの
type CountStateでDBの型を定義している
inititalStateはDBの初期状態
*/