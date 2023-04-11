describe('The flight tab test will verify the flights funcionality', () => {

    const car_tab = '[data-cy="Car"]'
    const location_placeholder = '[name="location"]'
    const dropoff = '[name="dropoff"]'

    before(() => {
        cy.visit('http://localhost:3000')
    })

    beforeEach(() => {
        cy.get(car_tab).click()
    })

    after(() => {
        cy.log("after all")
    })

    afterEach(() => {
        cy.log("after each")
    })

    it('navigate to the car tab', () => {
        cy.get(location_placeholder).should("be.visible")
        cy.get(car_tab).invoke('attr', 'aria-expanded').should("eq", "true")
        cy.get(car_tab).invoke('text').should("eq", "car")

    })

    it('populates location', () => {
        cy.get(location_placeholder).type("Paris").invoke("val").should("eq", "Paris")

    })

    it('populates drop off', () => {
        cy.get(dropoff).clear();
        cy.get(dropoff).type("06/10/2023").invoke("val").should("eq", "06/10/2023");

    })


})