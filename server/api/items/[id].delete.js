import { readData, writeData } from "~~/server/db/utils";
export default defineEventHandler(async (event) => {
    try{
    const id = Number(event.context.params.id);

    if(isNaN(id)){
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid ID'
        })
    }

    const data = await readData();

    const itemExists = data.find(item => item.id === id)

    if(!itemExists){
        throw createError({
            statusCode: 404,
            statusMessage: 'Item not found'
        })
    }

    //  deletion
    const updatedData = data.filter(item => item.id !== id)
    
    await writeData(updatedData);

    return {
        success: true,
        message: `Item with id ${id} deleted successfully!`,
        data: updatedData
    }
    } catch(error) {
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || "Something went wrong"
        })
    }
})