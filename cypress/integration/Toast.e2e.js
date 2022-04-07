it('visits the app', () => {
  cy.visit('/');
});

describe('Toast examples', () => {
  it('should display new toasts', () => {
    cy.visit('/');
    cy.get('[data-test-id="successButton"]').click();
  });
});
