//To Proivide Test Data & Objects / Elelments related to whole application
import {Page} from '@playwright/test';
export class global {
    constructor(public page : Page) {
        this.page = page;
    }
 //**************************Test Data */ 
 public url : string      = "https://ctcorphyd.com/SureshIT/login.php";
 public username : string = "sureshit";
 public password : string = "sureshit";
 public empfirstname : string = "surekha";
 public emplastname : string = "mathireddy";
 public empmiddlename :string ="sai";
 public nationality :string = "INDIANS";
 public searchoption:string = "Emp. First Name";

 //********************Objects / Elements */  
 public textbox_loginname : string = "//input[@name='txtUserName']";
 public textbox_password : string  = "//input[@name='txtPassword']";
 public button_login : string      = "//input[@value='Login']";
 public link_logout : string       = "//a[text()='Logout']";
 public frame_empInfo : string     = "//iframe[@id='rightMenu']";

 public button_add : string        = "//input[@value='Add']";
 public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
 public textbox_emplastname : string  = "//input[@name='txtEmpLastName']";
 public button_save : string          = "//input[@value='Save']";
 public dropdown_select : string  = "#loc_code";
 public dropdown_selectemp  :string  ="Emp. First Name";
 public search_textbox :string  = "//input[@id='loc_name']";
 public button_search :string  = "//input[@value='Search']";
 //public link_empname  :string ="//a[text()='surekha  mathireddy']";

 public link_empname  :string = "//a[contains(text(),'surekha')]";
 public button_edit :string ="//input[@id='btnEditPers']";
 public textbox_empmiddlename :string ="//input[@name='txtEmpMiddleName']";
 public dropdown_nationality :string  ="//select[@id='cmbNation']";
 public edit_save :string = "//input[@id='btnEditPers']";
 public check_emp :string = "//input[@name ='chkLocID[]']";
 public delete_emp :string = "//input[@value='Delete']";




}