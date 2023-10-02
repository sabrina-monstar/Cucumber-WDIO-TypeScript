Feature: Open the URL
    @demo
    Scenario Outline: Webpage interaction

        Given Web page is opened
        When Perform web interaction

        Examples:
            | TestCaseID |
            | Web_TC_002 |
