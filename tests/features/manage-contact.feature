Feature: Manage Contacts
  In order to manage my contacts
  As a logged-in user
  I want to create and edit contacts in the app

  Background:
    Given I am logged into the contact list app

  Scenario: Create a new contact
    When I create a new contact with valid data
    Then New contact should appear in the contact list

  Scenario: Edit an existing contact
    Given An existing contact in my contact list
    When I update the details of the existing contact
    Then Updated details should be reflected in the contact list
