describe('renders home page', () => {
    it('renders correctly', () => {
        cy.visit("/")
        cy.get('#__next').should('exist')
    })
})

describe('allows nav actions', () => {
    it('should show and hide modal on click', () => {
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.nav__item > .Button_button__GeQ2O').click();
        cy.get('.Modal_btn--close-modal__tnaKP').click();
        /* ==== End Cypress Studio ==== */
    });

    it('should go to the sections in the nav ', () => {
        cy.visit('/')
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(1) > .Navigation_nav__link__Kw09G').click();
        /* ==== End Cypress Studio ==== */
    });
});