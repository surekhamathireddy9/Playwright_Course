//To Provide all Re-usable Functions / Methods[User-Defined] related to whole application
import {global} from './Global';
export class general extends global {
async openApplication() {
await this.page.goto(this.url);
console.log("Application Opened");
}
async login() {
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login completed");
}
async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout completed");
}
async waitStatement() {
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
}
async addNewEmployee() {
    //Enter into frame
    const frame = this.page.frameLocator(this.frame_empInfo);
    //click on Add button
    await frame.locator(this.button_add).click();
    console.log("Clicked on Add button");
//ENter first name & last name
    await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
    await frame.locator(this.textbox_emplastname).fill(this.emplastname);
    console.log("First name & Last name entered");
    //Click on save button
    await frame.locator(this.button_save).click();
    console.log("Clicked on Save button");
}
async editEmployee() {
    //Enter into frame
    const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.dropdown_select).selectOption(this.searchoption);
    await frame.locator (this.search_textbox).fill(this.empfirstname);
    await frame.locator(this.button_search).click();
    await frame.locator(this.link_empname).waitFor({state :'visible',timeout :10000});
    await frame.locator(this.link_empname).click();
    await frame.locator(this.button_edit).click();
    await frame.locator(this.textbox_empmiddlename).fill(this.empmiddlename);
    console.log ("middle name is entered");
    await frame.locator(this.dropdown_nationality).selectOption(this.nationality);
    console.log("nationality is entered");
    await frame.locator(this.edit_save).click();
    console.log("Successfully employee changes are updated ");
}
async deleteEmployee(){
 const frame = this.page.frameLocator(this.frame_empInfo);
    await frame.locator(this.dropdown_select).selectOption(this.searchoption);
    await frame.locator (this.search_textbox).fill(this.empfirstname);
    await frame.locator(this.button_search).click();
    //await frame.locator(this.link_empname).waitFor({state :'visible',timeout :30000});
    await frame.locator(this.link_empname).first().click(); 
    await frame.locator(this.check_emp).check();
    await frame.locator(this.delete_emp).click();
}




}

