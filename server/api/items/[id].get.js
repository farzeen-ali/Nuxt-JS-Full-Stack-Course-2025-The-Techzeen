import { readData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const data = await readData();

    const item = data.find((item) => item.id === Number(id))

    if(!item){
        throw createError({
            statusCode: 404,
            statusMessage: "Item not found"
        })
    }
    return ({
        success: true,
        data: item
    })
})