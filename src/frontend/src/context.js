import React from 'react';


// ポップアップの表示を制御するReact.Context
export const ShowPopupContext = React.createContext({
    showPopup: false,
    toggleshowPopup: () => {alert("react content is not seted!");}
});
