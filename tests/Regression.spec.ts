import {test} from '@playwright/test';
import { general } from '../lib/General';


test.describe('Regression Suite', () => {
 test('@TC001-Login & Logout', async ({page}) => {
     const obj = new general(page);
     //--Test Steps
     await obj.openApplication();
     await obj.waitStatement();
     await obj.login();
     await obj.waitStatement();
     await obj.logout();
 });   
 test('@TC002-Login & Logout',async ({page}) => {
     let obj = new general(page);
     //--Test Steps
     await obj.openApplication();
     await obj.waitStatement();
     await obj.login();
     await obj.waitStatement();
     await obj.addNewEmployee();
     await obj.waitStatement();
     await obj.logout();
 });
});