import React, { useContext, useState } from "react";
import DropDown from "../../components/dropdown/Dropdown";
import LocationDropDown from "../../container/LocationDropDown/LocationDropDown";
import StoresContainer from "../../containers/stores/StoresContainer";
import LocationContext from "../../context/locationContext";
import "./WatchStoresPage.css";

export default function StoresPageForStudent(){

    const [isSchoolChosen, chooseSchool] = useState(false);
    // const [curLocation, chooseLocation] = useContext(LocationContext); 

    return (
        <LocationContext.Provider value="">
        <div className="vertical">
                {isSchoolChosen ? <div></div>
                : <StoresContainer></StoresContainer>}
        </div>
        <LocationDropDown chooseSchool={() => chooseSchool(true)}>
        </LocationDropDown>
        </LocationContext.Provider>
    );
}