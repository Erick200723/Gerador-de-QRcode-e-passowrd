import PermitCharacteres from "./utils/permit-characteres.js";

async function handle(){
    let characteres = []
    let password = ""

    const passwordLength = process.env.LENGTH;
    characteres = await PermitCharacteres();

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * characteres.length)
        password += characteres[index]
 
    }
    return password;
    
}

export default handle;