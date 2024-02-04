import { Before, After } from "@cucumber/cucumber";
import apiController from "../test/steps/setup/api.controller";

Before(async function () {
  console.log("BeforeAll : ");

    
  await apiController.init();
  await apiController.getUsers("users");
});

After(async function () {
  console.log("AfterAll : ");
});
