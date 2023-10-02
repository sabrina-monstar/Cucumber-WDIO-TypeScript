Feature: Register Page
    @Register
    Scenario Outline: As a user, I want to register the account

        Given open the browser and navigate to url
        Then Verify that home page is visible successfully
        Then Click on Signup button
        Then Verify <NewText> is visible
        Then Enter <UserName> and <Email>
        #Then Verify <HeaderText> is visible

        Examples:
            | TestCaseID | NewText          | UserName    | Email                 | HeaderText                |
            | TC_001     | New User Signup! | sabrina2023 | sabrinamdel@gmail.com | ENTER ACCOUNT INFORMATION |
