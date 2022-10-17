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

    response.redirect("/");
};

export { addChore };