import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList} from "@progress/kendo-react-dropdowns"; 
import "./DropDown.css";

export default function DropDown(props) {

    return (<DropDownList defaultValue={props.title} className="drop-down-list" 
    data={props.data} onChange={e => props.changeValue(e.value)}/>
    );
}