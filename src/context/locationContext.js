import React from "react";


// context 쓴 이유 학생들이 가게 고르는 페이지에서 drop down container , drop down
// 이렇게 여러 컴포넌트에 걸쳐서 데이터가 전달되는 불편함을 막기 위해.. 
// redux 안 쓴 이유는? 그렇다고 위치를 바꾸는 곳이 그렇게 여러곳 있는 건 아니라 
// redux 쓰기는 좀 과하다고 생각함.
const LocationContext = React.createContext({
    curLocation: "",
    chooseLocation: () => {}
});

export default LocationContext;
