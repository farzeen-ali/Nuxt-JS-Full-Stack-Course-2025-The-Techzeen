import { readData } from "~~/server/db/utils";

export default defineEventHandler(async (event) => {
    const data = await readData();
    return {
        success: true,
        count: data.length,
        data
    }
})