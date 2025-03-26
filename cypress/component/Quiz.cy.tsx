import Quiz from '../../client/src/components/Quiz';

describe('<Quiz />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  })

  it('should display a button to start the quiz', () => {
    cy.mount(<Quiz />)
    cy.get('button').should('have.text', 'Start Quiz');
  });
})