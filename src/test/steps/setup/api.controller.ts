import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import {
  APIRequestContext,
  APIResponse,
  expect,
  request,
} from "@playwright/test";

class APIController {
  private fakerApi!: APIRequestContext;

   async init() {
    this.fakerApi = await request.newContext({
      baseURL: "https://jsonplaceholder.typicode.com",
      extraHTTPHeaders: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }


  async getUsers(path:string) {
    const responseGetAllUser = await this.fakerApi.get(path);
    expect(responseGetAllUser.status()).toEqual(200);
    //console.log(await responseGetAllUser.text());
    const responseBody = await responseGetAllUser.json();

    console.log(
      "Name : " +
        responseBody[0]["name"] +
        "Email : " +
        responseBody[0]["email"]
    );

  }
}
export default new APIController();


