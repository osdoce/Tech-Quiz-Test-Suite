describe('User journey through quiz app', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3001/');
    cy.intercept({
      method: 'GET',
      url: '/api/questions/random'
    },
      {
        fixture: 'question.json',
        statusCode: 200
      }
    ).as('fixtureQuestion')
  });


  it('arrives at home screen', () => {
    cy.visit('http://localhost:3001')
  });

  it('starts the quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('h2').should('not.be.empty');  
  });

  it('fetches questions', () => {

    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('4').click();
  });

  it('ends the quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('4').click();
    cy.get('h2').contains('Quiz Completed'); 
  });

  it('restarts the quiz', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('4').click();
    cy.get('h2').contains('Quiz Completed');
    cy.get('button').contains('Take New Quiz').click();
  });

})