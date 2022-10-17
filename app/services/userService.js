import { executeQuery } from "../database/database.js";

const addUser = async (name, address, email, password) => {
    await executeQuery(
        `INSERT INTO users
            (name, address, email, password)
            VALUES ($name, $address, $email, $password)`,
        { name: name, address: address, email: email, password: password }
    );
};

export { addUser };