import  signIn  from '../firebase/auth';
import KeyboardInput from './KeyboardInput';

const itemNameList = ["id", "password"];
const itemList = itemNameList.map((item, index) => {
    return {
        id: index,
        name: item,
        value: undefined,
    }
})
const setItemValue = (id, value) => {
    itemList[id].value = value;
}


const SignIn = () => {
    
    const callPropFunction = () => {
        const signInData = {};
        itemList.map(item => {
            signInData[item.name] = item.value.replace(/(\s*)/g, "")
        })
        console.log(signInData)
        signIn({id:signInData["id"], password:signInData["password"]})
    }

    const onClick = () => {
        let rightValue = true;
        for (let i=0; i<itemList.length; i++){
            let item = itemList[i].value;
            if (item === undefined){
                rightValue = false;
                break;
            } else if (item.replace(/(\s*)/g, "") === ""){
                rightValue = false;
                break;
            }
        }
        if (rightValue){
            callPropFunction()
        } else{
            console.log("빈 양식이 있습니다");
            console.log(itemList)
        }
    }

    return (
        <div className="SignIn">
            {
                itemList.map(
                    item => (<KeyboardInput propFunction={setItemValue} key={item.id} id={item.id} name={item.name}/>)
                )
            }
            <button onClick={onClick}>로그인</button>
        </div>
    )
}
export default SignIn;