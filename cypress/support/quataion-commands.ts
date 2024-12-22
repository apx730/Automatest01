import quatationPages from "../pages/quatation-pages";
export class QuotationCommands{

    public static clickCreateQuotationButton(quatationtype:string){
        cy.get(quatationPages.btnCreatequatation).click();
        cy.get(quatationPages.ddlserviceType).select(quatationtype)
        cy.get(quatationPages.btnSelectservicetype).click()

    }
    public static verifyHeader(text:string){
        cy.contains(text)
    }
    public static ChooseHeadercompany(HeaderName:string){
        cy.get(quatationPages.ddlHeaderCompany).select("APX Transport Network Company Limited")
    }
    public static customername(customername:string){
        cy.get(quatationPages.autocompletecustomer).type("COM7")
        cy.wait(1000)
        cy.get(quatationPages.autocompletecustomer).type("{enter}")
        
    }
    public static selectcontact(selectcontact:string){
        cy.get(quatationPages.selectcontact).select("Attapol Wattanachinda")
    }
    public static inputemail(email:string){
        cy.get(quatationPages.email).type("superadmin@apx.group")
    }
    public static clickbtnSavedraft(){
        cy.get(quatationPages.btnSavedraft).click()
    }
    public static vefirysuccesstext(success:string,lblQuotationsuccessfullycreated){
        cy.contains(success)
        cy.contains(lblQuotationsuccessfullycreated)
    }
    public static clickok(){
        cy.get(quatationPages.btnOk).click()
    }
}