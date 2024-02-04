import { Before, After } from "@cucumber/cucumber";
import apiController from "../test/steps/setup/api.controller";

Before(async function (scenario) {
  console.log("BeforeAll : " + scenario.pickle.name);

    
  await apiController.init();
  await apiController.getUsers("users");
});

After(async function (scenario) {
  console.log("AfterAll : ");
});
