import React from 'react';


// ポップアップの情報を制御するReact.Context
export const PopupContentContext = React.createContext({
    popupContentUrl: "null",
    setUrl: () => {alert("react PopupContentContext is not seted!");}
})