import { executeQuery } from "../../database/database.js";
import { renderFile } from "../../deps.js";
import * as choreService from "../../services/choreService.js";

const addChore = async ({ request, response }) => {
    const body = request.body({ type: "form" });
    const params = await body.value;

    console.log(params);

    await choreService.addChore(
        1,
        params.get("title"),
        params.get("description"),
        params.get("chorecoins"),
        params.get("due_date"),
    );

    response.redirect("/chores");
};

const claimChore = async ({ params, response }) => {
    await choreService.claimChore(params.id, 1);

    response.redirect("/chores");
};

const listChores = async ({ render }) => {
    render("chores.eta", {
        availableChores: await choreService.listAvailableChores(),
        claimChores: await choreService.listUserChores(1),
    });
};

const completeChore = async ({ params, response }) => {
    await choreService.completeChore(params.id, 1);

    response.redirect("/chores");
};

export { addChore, claimChore, completeChore, listChores };