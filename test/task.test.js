const { users, all, store, update, destroy } = require("../task");

describe("# Menjalankan Test: Array of Object Users", () => {
  const keys = ["name", "age", "major"];

  test("users harus berupa array of object", () => {
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test("users setidaknya memiliki 5 items/data", () => {
    expect(users.length).toBeGreaterThanOrEqual(5);
  });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${name ?? "item"} harus berupa object`, () => {
        expect(typeof user).toBe("object");
      });
    });

  users &&
    users.forEach((user) => {
      const { name } = user;
      test(`${
        name ?? "item"
      } harus memiliki property name, age, dan major`, () => {
        keys.forEach((key) => {
          expect(user).toHaveProperty(key);
        });
      });
    });
});

describe("# Menjalankan Test: Function all", () => {
  test("function all harus bisa dipanggil", () => {
    const result = all();
    expect(result).toBeUndefined();
  });
});

describe("# Menjalankan Test: Function store", () => {
  const user = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };

  test("function create harus bisa dipanggil", () => {
    const result = store(user);
    expect(result).toBeUndefined();
  });

  test("function create harus bisa menambahkan user baru", () => {
    const lengthOfOldUsers = users.length;
    store(user);
    const lengthOfNewUsers = users.length;
    expect(lengthOfNewUsers).toBeGreaterThan(lengthOfOldUsers);
  });
});

describe("# Menjalankan Test: Function edit", () => {
  const index = 1;
  const oldUser = users && users[index];
  const user = {
    name: "Isfa Update",
    age: 10,
    major: "Software Engineer Update",
  };

  test("function edit harus bisa dipanggil", () => {
    const result = update(index, user);
    expect(result).toBeUndefined();
  });

  test("function edit harus bisa mengedit user", () => {
    const newUser = users[index];
    expect(newUser).not.toEqual(oldUser);
  });
});

describe("# Menjalankan Test: Function destroy", () => {
  const index = 2;

  test("function destroy harus bisa dipanggil", () => {
    const result = destroy(index);
    expect(result).toBeUndefined();
  });

  test("function destroy harus bisa menghapus user", () => {
    const lengthOfOldUsers = users.length;
    destroy(index);
    const lengthOfNewUsers = users.length;
    expect(lengthOfNewUsers).toBeLessThan(lengthOfOldUsers);
  });
});
