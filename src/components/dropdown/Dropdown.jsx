import '@progress/kendo-theme-default/dist/all.css';
import { DropDownList} from "@progress/kendo-react-dropdowns"; 

export default function DropDown(props) {

    return (
        <section className="k-my-8">
            <form className="k-form k-mb-4">
                <label className="k-label k-mb-3">{props.title}</label>
                <DropDownList data={props.data} onChange={e => props.changeValue(e.value)}/>
            </form>
        </section>
    );
}