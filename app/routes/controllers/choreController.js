import * as choreService from "../../services/choreService.js";

const addChore = async ({ request, response }) => {
    const body = request.body({ type: "form" });
    const params = await body.value;

    console.log(params);

    response.redirect("/");
};

export { addChore };