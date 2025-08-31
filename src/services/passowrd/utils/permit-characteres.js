async function PermitCharacteres(){
    let characteres = []

    if(process.env.LOWERCASE_LETTER === "true"){
        characteres.push(..."abcdefghijklmnopqrstuvwxyz")
    }

    if(process.env.UPPERCASE_LETTER === "true"){
        characteres.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if(process.env.NUMBER === "true"){
        characteres.push(..."0123456789")
    }

    if(process.env.SPECIAL_CHARACTER === "true"){
        characteres.push(..."!@#$%¨&*()_+{}[];:,.<>?")
    }

    return characteres;
}

export default PermitCharacteres;