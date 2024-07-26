import targetModule from "../src/back/auth/vrcEmailVerify";

describe("VRChat User verify", () => {
  it("accept", async () => {
    const result = await targetModule(
      "usr_dd3077a5-c580-44f2-907a-9128d5a249ce",
      "akatuki-sora@akatuki-host.com",
    );
    expect(result).toBeTruthy;
  });
  it("email invalid", async () => {
    const result = await targetModule(
      "usr_dd3077a5-c580-44f2-907a-9128d5a249ce",
      "test@example.com",
    );
    expect(result).toBeFalsy;
  });
  it("id invalid", async () => {
    const result = await targetModule(
      "usr_7d24eeca-2652-425f-a866-3331c42c2e53",
      "akatuki-sora@akatuki-host.com",
    );
    expect(result).toBeFalsy;
  });
  it("all invalid", async () => {
    const result = await targetModule(
      "usr_7d24eeca-2652-425f-a866-3331c42c2e53",
      "test@example.com",
    );
    expect(result).toBeFalsy;
  });
});
