describe('Form - testing out form inputs', function() {
    this.beforeEach(()=> {
        cy.visit("http://localhost:3000/");
    });

    it("add text to inputs and submit", function() {
        cy.get('[data-cy="name"]')
        .type("Cody")
        .should("have.value", "Cody");
        cy.get('[data-cy="email"]')
        .type("codyt11@hotmail.com")
        .should("have.value", "codyt11@hotmail.com");
        cy.get('[data-cy="motivation"]')
        .type("to help out")
        .should("have.value", "to help out");
        cy.get('[data-cy="positions"]')
        .select("Yard Work")
        .should("have.value", "Yard Work");
        cy.get('[data-cy="terms"]')
        .check()
        .should("be.checked")
        cy.get('[data-cy="submit"]')
        .click()
    });
});