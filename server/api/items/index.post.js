import { readData, writeData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event);
        if(!body || Object.keys(body).length === 0){
            throw createError({
                statusCode: 400,
                statusMessage: 'Request Body is Required!'
            })
        }
        const { id, name, price, category } = body;
        if(id == null || !name || price == null || !category){
            throw createError({
                statusCode: 400,
                statusMessage: "All fields are required!"
            })
        }
        if(typeof id !== "number" || typeof price !== "number"){
            throw createError({
                statusCode: 400,
                statusMessage: "id and price must be numbers!"
            })
        }
        const data = await readData();
        const existingItem = data.find((item) => item.id === id);
        if(existingItem){
            throw createError({
                statusCode: 409,
                statusMessage: "Item with this Id Already Exist!"
            })
        }
        const newItem = { id, name, price, category};
        data.push(newItem);
        await writeData(data);

        return {
            success: true,
            message: "Item addess successfully!",
            data: newItem,
        }
    } catch(error){
        throw createError({
                statusCode: error.statusCode || 500,
                statusMessage: error.statusMessage || "Something went wrong"
            })
    }
})