describe('Toast examples', () => {
  it('should change directory', () => {
    cy.visit('/');
    cy.get('#custom').click();
    cy.visit('/iframe.html?id=custom--edit');
    cy.get('.sc-dkPtRN').should('have.text', 'Text');
  });
  it('should change color', () => {
    cy.get('.sc-dkPtRN').should('have.text', 'Text');
    cy.get('.sc-bdvvtL').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.visit('?path=/story/custom--edit');
    cy.get(':nth-child(4) > :nth-child(2) > .css-12yhldn').click();
    cy.get('.saturation-black').click(80, 10);
  });
  it('should change text', () => {
    cy.get('#text').type('123');
    // cy.get('[data-test-id="toastTextTitle"]').should('have.text', 'Text123');
  });
  it('should change title', () => {
    cy.get('#title').type('123');
  });
});
