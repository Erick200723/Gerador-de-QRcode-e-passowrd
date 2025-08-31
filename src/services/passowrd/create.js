import chalk from "chalk"
import handle from "./handle.js"

async function createPasswordService() {
    console.log(chalk.green("Creating password..."))
    const password = await handle()
    console.log(chalk.blue("Sua senha é: " + chalk.bold(password)))
}

export default createPasswordService