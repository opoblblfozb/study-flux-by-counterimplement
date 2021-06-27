// src/App.tsx
import React from "react";
import { useReducer } from "react";
import { useContext } from "react";

import { counterReducer} from "./flux/reducer";
import initialState from "./flux/state";
import { StoreContext } from "./flux/Store";

import Store from "./flux/Store";


export default function Counter() {
  // useReducerの使い方。
  // counterReducer, initialStateを「使えるようにする」
  // 内部DBがintitialStateとして初期化されたAPIをたてる。
  // counterReducerがその内部の実装
  // dispatchがreducerの引数であるActionのtypeからつくられるインターフェイス
  // stateが内部DBの初期状態
  const [state, dispatch] = useReducer(counterReducer, initialState)
  // Contextの初期状態を作成。state=内部DBとdispatch=DBアクセスのためのインターフェイスをグローバルにおく。
  const context:StoreContext = {state, dispatch}
  // useContext(コンテキストオブジェクト)で子コンポーネントは現在のContextにアクセスできる。
  // Store.Providerでvalueに指定した初期値でコンテキストを渡す。
  return (
    <div>
      <Store.Provider value={context}>
      <CurrentDigit />
      <div></div>
      <Button name={"increment"} />
      <Button name={"reset"} />
      </Store.Provider>
    </div>
  );
}

function CurrentDigit() {
  const context = useContext(Store)
  return (
    <h1>{context.state.count}</h1>
  )
}

function Button(props) {
  const context = useContext(Store);
  function onClickEvent (){
    if (props.name === "increment"){
      // dispatchでstateに変更が加えられると、useContextを使った
      // すべてのコンポーネントが再レンダリングされる。
      context.dispatch({type: "INCREMENT"})
    } else {
      context.dispatch({type: "RESET"})
    }
  }
  return (
    <button type="button" onClick={onClickEvent}>{props.name}</button>
  )
}