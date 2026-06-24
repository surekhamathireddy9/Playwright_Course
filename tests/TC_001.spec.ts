//To Provide actual Test Scripts based on Manual Test Steps
import {test} from "@playwright/test";
import {general} from "../lib/General";

test('TC001-Login & Logout', async ({page}) => {
    const obj = new general(page);
    //--Test Steps
    await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.logout();
});