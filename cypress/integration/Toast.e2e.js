it('visits the app', () => {
  cy.visit('/');
});

describe('Toast examples', () => {
  it('should display new toasts', () => {
    cy.visit('/');
    cy.get('#app--toasts').should('have.text', 'Toasts').click();
    cy.get('#storybook-preview-iframe').contains('.sc-jRQBWg.gwnCOK');
  });
});
