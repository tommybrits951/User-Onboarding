

describe("My first Tests", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameFirstInput = () => cy.get("input[name=firstName]");
    const nameLastInput = () => cy.get("input[name=lastName]");

    it("Check for exist", () => {
        nameFirstInput().should("exist")
        nameLastInput().should("exist")
    })

    it("Type in inputs", () => {
        cy.get("input[name=firstName]").type("tommy").should("have.value", "tommy")
        cy.get("input[name=lastName]").type("brits").should("have.value", "brits")
        cy.get("input[name=email]").type("hey@hey.com").should("have.value", "hey@hey.com")
        cy.get("input[name=password]").type("pass").should("have.value", "pass")
        cy.get("input[type=checkbox]").check().should("be.checked")
        cy.get("input[type=submit]").click()
        cy.get("input[name=firstName]").should("have.value", '')
    })
    
    
})