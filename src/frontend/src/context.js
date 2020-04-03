import React from 'react';


// ポップアップの表示を制御するReact.Context
export const ShowPopupContext = React.createContext({
    showPopup: false,
    toggleshowPopup: () => {alert("react ShowPopupContext is not seted!");}
});

// ポップアップの情報を制御するReact.Context
export const PopupContentContext = React.createContext({
    popupContentUrl: "",
    setUrl: () => {alert("react PopupContentContext is not seted!");}
})