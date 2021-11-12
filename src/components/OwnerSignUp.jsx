import KeyboardInput from './KeyboardInput'

const itemNameList = ["id", "name", "password", "email", "phoneNumber", "businessNumber"];
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


const OwnerSignUp = ( props ) => {

    const callPropFunction = () => {
        const signUpData = {};
        itemList.map(item => {
            signUpData[item.name] = item.value.replace(/(\s*)/g, "")
        })
        signUpData["userType"] = "owner"
        console.log(signUpData)
        // props.propFunction(signUpData)
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

    console.log(itemList);
    return (
        <div className="SignUp">
            <h1>Owner 회원가입</h1>
            {
                itemList.map(
                    item => (<KeyboardInput propFunction={setItemValue} key={item.id} id={item.id} name={item.name}/>)
                )
            }
            <button onClick={onClick}>submit</button>
        </div>
    )
}

export default OwnerSignUp;