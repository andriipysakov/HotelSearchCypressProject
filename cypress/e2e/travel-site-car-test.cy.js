describe('The flight tab test will verify the flights funcionality', () => {

    const car_tab = '[data-cy="Car"]'
    const location_placeholder = '[name="location"]'
    const dropoff = '[name="dropoff"]'
    const car_group_list = '[name="car-group"]'
    const driver_age_list = '[name="driver-age"]'

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

    it('chooses location', () => {
        cy.get(location_placeholder).type("Paris").invoke("val").should("eq", "Paris")

    })

    it('chooses drop off', () => {
        cy.get(dropoff).clear();
        cy.get(dropoff).type("06/10/2023").invoke("val").should("eq", "06/10/2023");

    })

    it('chooses list of cars', () => {
        cy.get(car_group_list).should('be.visible');
        cy.get(car_group_list).select('Group 1', {force: true})
        cy.get('[title="Group 1"]').should("be.visible")
        cy.get(car_group_list).select('Group 2', {force: true})
        cy.get('[title="Group 2"]').should("be.visible")
        cy.get(car_group_list).select('Group 3', {force: true})
        cy.get('[title="Group 3"]').should("be.visible")

    })

    it('chooses driver age', () => {
        cy.get(driver_age_list).should('be.visible');
        cy.get(driver_age_list).select('23', {force: true}).should('have.value', '23')
        cy.get(driver_age_list).select('24', {force: true}).should('have.value', '24')
        cy.get(driver_age_list).select('25', {force: true}).should('have.value', '25')
        cy.get(driver_age_list).select('26', {force: true}).should('have.value', '26')

    })


})