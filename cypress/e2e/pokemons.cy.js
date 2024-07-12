import * as data from "../helpers/pokemons_data.json"
import * as pokemons from "../locators/pokemons.json"

describe('Покупка нового аватара для своего тренера', function () {

    it('e2e тест', function () {
        cy.visit('/');
        cy.get(pokemons.email).type(data.login);
        cy.get(pokemons.password).type(data.password);
        cy.get(pokemons.auth_button).click();
        cy.get(pokemons.shop_button).click();
        cy.get(pokemons.avatar).first().click();
        cy.get(pokemons.card_number).type(data.card_number);
        cy.get(pokemons.card_actual).type(data.card_actual);
        cy.get(pokemons.card_cvv).type(data.card_cvv);
        cy.get(pokemons.card_name).type(data.card_name);
        cy.get(pokemons.pay_button).click();
        cy.get(pokemons.push_code).type(data.secure_code);
        cy.get(pokemons.payment_button).click();
        cy.get(pokemons.success_message).contains(data.success_message).should('be.visible');
        cy.get(pokemons.back_to_pokemons_button).click();
    });
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/pokemons.cy.js --browser chrome