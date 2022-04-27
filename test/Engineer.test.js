const Engineer = require("../Lib/Engineer");

test("Can set Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Poo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});
test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Poo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});
test("Can set Github username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Poo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
}); 