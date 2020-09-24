import { resetHardhatContext } from "@nomiclabs/buidler/plugins-testing";
import { HardhatRuntimeEnvironment } from "@nomiclabs/buidler/types";

declare module "mocha" {
  interface Context {
    env: HardhatRuntimeEnvironment;
  }
}

export function useEnvironment(projectPath: string) {
  beforeEach("Loading hardhat environment", function () {
    process.chdir(projectPath);
    process.env.HARDHAT_NETWORK = "ganache";

    this.env = require("@nomiclabs/buidler");
  });

  afterEach("Resetting hardhat", function () {
    resetHardhatContext();
  });
}
