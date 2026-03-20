import { readData, writeData } from "~~/server/db/utils";
export default defineEventHandler(async (event) => {
    try{
        const id = Number(event.context.params.id);
        if(isNaN(id)){
            throw createError({
                statusCode: 400,
                statusMessage: "Invalid ID"
            })
        }
        const body = await readBody(event);

        if(!body || Object.keys(body).length === 0){
            throw createError({
                statusCode: 400,
                statusMessage: 'Atleast one field is required'
            })
        }
        const data = await readData();

        const itemIndex = data.findIndex((item) => item.id === id)
        if(itemIndex === -1){
            throw createError({
                statusCode: 404,
                statusMessage: 'Item not Found'
            })
        }
        const existingItem = data[itemIndex];
        const updatedItem = {
            ...existingItem,
            ...body
        }
        data[itemIndex] = updatedItem;
        await writeData(data)

        return {
            success: true,
            message: "Item updated successfully!",
            data: updatedItem
        };
    } catch(error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || "Something went wrong"
        })
    }
})