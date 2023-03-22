const getMonth = require('./index');

describe("test getMonth", () => {
    const month = 5;
    const incorrect = 0;
    const unknown = 13;
    it("title of the month", () => {
        expect(getMonth(month)).toBe('май');
    });
    it("the number is incorrect", () => {
        expect(getMonth(incorrect)).toBe('данные неверны');
    });
    it("the number is unknown", () => {
        expect(getMonth(unknown)).toBe('неизвестно');
    });
}
)