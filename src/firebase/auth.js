import  fetchDb from './fetchDb'

const signIn = async ({id, password}) => {
    const users = await fetchDb("Users");
    
    const userState = {
        idFound: false,
        rightPassword: false,
    };

    users.forEach(user => {
        if (id === user.id){
            userState.idFound = true;
            if (password === user.password){
                userState.rightPassword = true;
            }
        }
    })

    // 여기서 페이지 이동을 해주면 될 듯..?
    if (userState.idFound){
        if (userState.rightPassword){
            console.log("Sign In")
        } else{
            console.log("Wrong password")
        }
    } else{
        console.log("계정 정보 없음")
    }

    return userState;
}

export default signIn;