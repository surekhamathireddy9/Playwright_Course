# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_003.spec.ts >> TC003-Edit- Employee
- Location: tests\TC_003.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at https://ctcorphyd.com/SureshIT/login.php
Call log:
  - navigating to "https://ctcorphyd.com/SureshIT/login.php", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
```

# Test source

```ts
  1  | //To Provide all Re-usable Functions / Methods[User-Defined] related to whole application
  2  | import {global} from './Global';
  3  | export class general extends global {
  4  | async openApplication() {
> 5  | await this.page.goto(this.url);
     |                 ^ Error: page.goto: net::ERR_NETWORK_CHANGED at https://ctcorphyd.com/SureshIT/login.php
  6  | console.log("Application Opened");
  7  | }
  8  | async login() {
  9  | await this.page.locator(this.textbox_loginname).fill(this.username);
  10 | await this.page.locator(this.textbox_password).fill(this.password);
  11 | await this.page.locator(this.button_login).click();
  12 | console.log("Login completed");
  13 | }
  14 | async logout() {
  15 | await this.page.locator(this.link_logout).click();
  16 | console.log("Logout completed");
  17 | }
  18 | async waitStatement() {
  19 |     await this.page.waitForTimeout(3000); // Wait for 3 seconds
  20 | }
  21 | async addNewEmployee() {
  22 |     //Enter into frame
  23 |     const frame = this.page.frameLocator(this.frame_empInfo);
  24 |     //click on Add button
  25 |     await frame.locator(this.button_add).click();
  26 |     console.log("Clicked on Add button");
  27 | //ENter first name & last name
  28 |     await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
  29 |     await frame.locator(this.textbox_emplastname).fill(this.emplastname);
  30 |     console.log("First name & Last name entered");
  31 |     //Click on save button
  32 |     await frame.locator(this.button_save).click();
  33 |     console.log("Clicked on Save button");
  34 | }
  35 | async editEmployee() {
  36 |     //Enter into frame
  37 |     const frame = this.page.frameLocator(this.frame_empInfo);
  38 |     await frame.locator(this.dropdown_select).selectOption(this.searchoption);
  39 |     await frame.locator (this.search_textbox).fill(this.empfirstname);
  40 |     await frame.locator(this.button_search).click();
  41 |     await frame.locator(this.link_empname).waitFor({state :'visible',timeout :10000});
  42 |     await frame.locator(this.link_empname).click();
  43 |     await frame.locator(this.button_edit).click();
  44 |     await frame.locator(this.textbox_empmiddlename).fill(this.empmiddlename);
  45 |     console.log ("middle name is entered");
  46 |     await frame.locator(this.dropdown_nationality).selectOption(this.nationality);
  47 |     console.log("nationality is entered");
  48 |     await frame.locator(this.edit_save).click();
  49 |     console.log("Successfully employee changes are updated ");
  50 | }
  51 | async deleteEmployee(){
  52 |  const frame = this.page.frameLocator(this.frame_empInfo);
  53 |     await frame.locator(this.dropdown_select).selectOption(this.searchoption);
  54 |     await frame.locator (this.search_textbox).fill(this.empfirstname);
  55 |     await frame.locator(this.button_search).click();
  56 |     await frame.locator(this.link_empname).waitFor({state :'visible',timeout :30000});
  57 |     //await frame.locator(this.link_empname).click(); 
  58 |     await frame.locator(this.check_emp).check();
  59 |     await frame.locator(this.delete_emp).click();
  60 | }
  61 | 
  62 | 
  63 | 
  64 | 
  65 | }
```