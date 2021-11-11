import "./ReservationPage.css";
import storeImage from "../../images/store.jpg"; 
import DropDown from "../../components/dropdown/DropDown";
import { useState } from "react";

export default function ReservationPage(props) {

    const store =  props.store;
    const allPossibleDates = Array.from({length: 31}, (_, i) => i + 1 + "일");
    const closeTime = parseInt(store.closeTime.slice(0, 2));
    const startTime = parseInt(store.openTime.slice(0, 2));
    
    const hours = Array.from({length: closeTime - startTime + 1}, (_, i) => startTime + i + "시");
    const [dates, setDates] = useState(allPossibleDates);

    const monthes = ["11월", "12월"];

   return ( <div className="vertical">
             <img src={storeImage}></img>
             <div className="store-detail">
                <div className="name">
                  가게 이름:  {store.name}
                </div>
                <div className="address margin-bottom">
                    주소: {store.address}
                </div>
                <div className="time margin-bottom">
                    영업시간: {store.openTime} ~ {store.closeTime}
                </div>
                <div className="header-count margin-bottom">
                    예약 가능한 인원수: {store.headerCount}
                </div>
                <div className="margin-bottom">
                   날짜 선택: 
                </div>
                <div className="horizontal">
                    <DropDown className="margin-right" title="월 선택" data={monthes}
                         changeValue={(value) =>  {
                        if(value == 11) {
                            let newDates =  [...dates];
                            const curDate = (new Date()).getDate();
                            newDates = newDates.filter(newDate => newDate >= curDate);

                            setDates(newDates);
                        }
                    }}></DropDown>
                    <DropDown title="날짜 선택" data={dates}></DropDown>
                </div>
                <div className="margin-bottom">
                   시간 선택: 
                </div>
                <div className="horizontal">
                    <DropDown title="시간 선택" data={hours}></DropDown>
                    
                </div>
             </div>
          </div>);
}