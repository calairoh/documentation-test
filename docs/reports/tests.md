---
id: tests
title: Tests
sidebar_label: Tests
---

The *Test Report* is a document that summarizes the result of all the tests carried out to verify that the actual implementation fulfills the requirements. Moreover, *Test Report* traces the test executors as well as the results of all the test executions. For further information about testing procedures and entities in Mia-Care P4SaMD please refer to the related section.

The *Test Report* generated by Mia-Care P4SaMD is composed by data that comes are collected both from the issue tracking tool and the Mia-platform project configuration.

:::note
The format of the *Test Report* generated by Mia-Care P4SaMD has been designed to address what is required by the regulatory framework. However, the document can be customized to address the Quality Management System (QMS) of a specific company. For further information about document customization, please refer to Mia-Care Support Team. 
:::

## Report structure

The document contains the following information:

* **Version name**: the version name uniquely identifies the version of the software that has been released and to which the *Test Report* refer to. It must follow the [Semantic Versioning standard](https://semver.org/);
* **Release date**: the release date represents the date in which the related software has been released;
* **Test Execution**: the *Test Report* contains the list of the test executions of the related software version. Each test execution is detailed with the following information:
  * **Test code**: the unique identifier of the test;
  * **Test title**: the title of the test;
  * **Test status**: the status of the test referred to the execution date;
  * **Execution date**: the execution date of the date;
  * **Executor**: the person who executed the test referred to the execution date;
  * **Test type**: the type of the test;
  * **Test description**: the description of the test;
  * **Reference test**: the test entity linked to the test execution;

## Attachments

Together with the *Test Report* document, Mia-Care P4SaMD allows you to generate reports for the different types of tests that the platform allows you to create. In particular we can have:
* **Unit Test Report**: it contains the result of unit tests performed on a single microservice. The format of unit test report may change based on the test library used for the specific microservice, which in turn changes based on the language or framework used;
* **Integration Test Report**: it contains the result of integration tests performed on a set of components. The format of integration test report is the one proposed by [Newman](https://github.com/postmanlabs/newman), since it is the tool used to run integration tests;
* **End-to-End (E2E) Test Report**: it contains the result of E2E tests performed at system level. The format of the E2E tests is the proposed by [Playwright](https://playwright.dev/), since it is the tool used to run E2E tests.