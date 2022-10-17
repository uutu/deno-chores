import { executeQuery } from "../database/database.js";

const addChore = async (userId, title, description, chorecoins, dueDate) => {
    await executeQuery(
        `INSERT INTO chores
            (user_id, title, description, chorechoins, due_date)
            VALUES ($userId, $title, $description, $coins, $dueDate)`,
        {
            userId: userId,
            title, title,
            description: description,
            coins: chorecoins,
            dueDate: dueDate,
        }  
    );
};

export { addChore };