import {test} from '@playwright/test';
import {general} from '../lib/General';

test('TC004-Delete- Employee',async ({page}) => {
    let obj = new general(page);
    //--Test Steps
     await obj.openApplication();
    await obj.waitStatement();
    await obj.login();
    await obj.waitStatement();
    await obj.deleteEmployee();
    await obj.waitStatement();
    await obj.logout();
});