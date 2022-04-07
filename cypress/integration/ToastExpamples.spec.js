describe('Toast examples', () => {
  it('should display success toast', () => {
    cy.visit('/iframe.html?id=app--toasts');
    cy.get('[data-test-id="successButton"]').click();
    cy.get('[data-test-id="toastTextsuccess"]').should(
      'have.text',
      'success toast example'
    );
  });
  it('should display error toast', () => {
    cy.get('[data-test-id="errorButton"]').click();
    cy.get('[data-test-id="toastTexterror"]').should(
      'have.text',
      'error toast example'
    );
  });
  it('should display warning toast', () => {
    cy.get('[data-test-id="warningButton"]').click();
    cy.get('[data-test-id="toastTextwarning"]').should(
      'have.text',
      'warning toast example'
    );
  });
  it('should close all toasts', () => {
    cy.get('[data-test-id="toastClosesuccess"]').click();
    cy.get('[data-test-id="toastCloseerror"]').click();
    cy.get('[data-test-id="toastClosewarning"]').click().wait(1500);
  });
  it('should display and close info toast', () => {
    cy.get('[data-test-id="infoButton"]').click().wait(1000);
    cy.get('[data-test-id="toastCloseinfo"]').click();
  });
});
