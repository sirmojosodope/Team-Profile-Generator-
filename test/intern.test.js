const Intern = require("../LiB/Intern");

test("Can set SCHOOL via constructor", () => {
    const testValue = "NYU";
    const e = new Intern("Poo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});
test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Poo", 1, "test@test.com", "NYU");
    expect(e.getRole()).toBe(testValue);
});
test("Can get school via getSchool()", () => {
    const testValue = "NYU";
    const e = new Intern("Poo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
}); 