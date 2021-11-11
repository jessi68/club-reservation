import { TreeViewItemPropsContext } from "@progress/kendo-react-treeview";
import { useRef } from "react";
import DropDown from "../../components/dropdown/DropDown";
import "./LocationDropDown.css";

// LocationDropDown container 라고 하면 너무 기니까
// 도메인 명 + dropdown 이라고 하기
export default function LocationDropDown(props) {

    const campusNameToLocations = {
        "서울대학교": "서울특별시 관악구 관악로 1",
        "연세대학교": "서울특별시 서대문구 연세로 50",
        "건국대학교": "서울시 광진구 능동로 120",
        "고려대학교": "서울특별시 성북구 안암로 145"
    };

    const schools = ["서울대학교", "연세대학교", "건국대학교", "고려대학교"];

    return  (
        <DropDown title="현재 위치 선택 (학교 기준)" data={schools} 
        changeValue={(value) => {
            props.choose(campusNameToLocations[value])
        }}>
        </DropDown>
    );
}
