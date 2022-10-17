import { executeQuery } from "../database/database.js";

const addChore = async (userId, title, description, chorecoins, dueDate) => {
    await executeQuery(
        `INSERT INTO chores
            (user_id, title, description, chorecoins, due_date)
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

const claimChore = async (choreId, userId) => {
    await executeQuery(
        `INSERT INTO chore_assignments
        (chore_id, user_id, created_at) VALUES
        ($choreId, $userId, NOW())`,
        { choreId: choreId, userId: userId },
    );
};

const listChores = async () => {
    const res = await executeQuery(`SELECT * FROM chores
        WHERE (due_date IS NULL OR due_date > NOW())
        `);

    return res.rows;
};

const listAvailableChores = async () => {
    const res = await executeQuery(`SELECT * FROM chores
        WHERE (due_date is NULL OR due_date > NOW())
        AND id NOT IN (SELECT chore_id FROM chore_assignments)
    `);

    return res.rows;
};

const listUserChores = async (userId) => {
    const res = await executeQuery(
        `SELECT * FROM chores
        WHERE id IN (
            SELECT chore_id FROM chore_assignments
            WHERE user_id = $userId AND completed_at IS NULL
        )
        `,
        { userId: userId }
    );

    return res.rows;
};

export { 
    addChore, 
    claimChore, 
    listChores,
    listAvailableChores,
    listUserChores,
};