import prompt from "prompt";
import createQRCode from "./services/qr.code/create.js";

import mainPromt from "./prompts/prompt-main.js";

async function main(){
    prompt.get(mainPromt, async (err, result) =>{
        if(result.select ==  1){
            await createQRCode()
        }
        if(result.select == 2){
            console.log("escolheu o passowrd")
        }
    })
}
main();