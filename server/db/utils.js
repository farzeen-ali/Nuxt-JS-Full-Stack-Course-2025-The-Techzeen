import { promises as fs } from "fs"
import path from "path"

const dataPath = path.resolve("server/db/data.json");

export async function readData(){
    try{
        const file = await fs.readFile(dataPath, "utf-8");
        return JSON.parse(file);
    } catch (error){
        throw createError({
            statusCode: 500,
            statusMessage: "Unable to read data"
        })
    }
}

export async function writeData(data){
    try{
        await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
    } catch(error){
        throw createError({
            statusCode: 500,
            statusMessage: 'Unable to write data'
        })
    }
}