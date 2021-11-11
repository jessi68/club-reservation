import React, { useContext, useState } from "react";
import DropDown from "../../components/dropdown/DropDown";
import LocationDropDown from "../../containers/LocationDropDown/LocationDropDown";
import NearStoresContainer from "../../containers/stores/NearStoresContainer";
import StoresContainer from "../../containers/stores/StoresContainer";
import "./WatchStoresPage.css";

export default function StoresPageForStudent() {

    const [isSchoolChosen, chooseSchool] = useState(false);
    const [curLocation, chooseLocation] = useState("");

    return (
            <div className="vertical">
                      <LocationDropDown choose={(location) => {
                          chooseSchool(true)
                          chooseLocation(location);
                      }}>
                       </LocationDropDown>
                    {isSchoolChosen ? <NearStoresContainer curLocation={curLocation}></NearStoresContainer>
                    : <StoresContainer></StoresContainer>}
            </div>
    );
}