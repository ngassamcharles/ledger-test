Feature: Manage Contacts
  In order to manage my contacts
  As a logged-in user
  I want to create and edit contacts in the app

  Background:
    Given I am logged into the contact list app via api

  @createContact @deleteContact @api
  Scenario: Create a new contact - API
    When I create a new contact with valid datas via api endpoint
    Then New contact should appear on the API response list
    When I delete contact with via api
    Then Contact should be deleted on API response
