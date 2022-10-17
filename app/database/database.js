import { Pool } from "../deps.js";

const CONCURRENT_CONNECTIONS = 2;

let connectionPool;
if (Deno.env.get("DATABASE_URL")) {
  connectionPool = new Pool(Deno.env.get("DATABASE_URL"), CONCURRENT_CONNECTIONS);
} else {
  connectionPool = new Pool({}, CONCURRENT_CONNECTIONS);
}

const executeQuery = async (query, params) => {
    const response = {};
    let client;

    try {
        client = await connectionPool.connect();
        const result = await client.queryObject(query, params);
        if (result.rows) {
            response.rows = result.rows;
        }
    } catch (error) {
        console.log(error);
        response.error = error;
    } finally {
        try {
            await client.release();
        } catch (error) {
            console.log(error);
        }
    }

    return response;
};

export { executeQuery };