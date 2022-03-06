import users from "../src/data/users.js";
import {
  formatUser,
  findByName,
  filterByMajor,
} from "../src/controllers/UserController";

describe("# Menjalankan Test: Array of Object", () => {
  const keys = ["name", "age", "major"];

  test("users harus ada atau sudah diexport", () => {
    const isUsersNotEmpty = Object.keys(users).length > 0;
    expect(isUsersNotEmpty).toBeTruthy();
  });

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

  test("setiap object harus memiliki property: name, age, dan major", () => {
    users.forEach((user) => {
      keys.forEach((key) => {
        expect(user).toHaveProperty(key);
      });
    });
  });
});

describe("# Menjalankan Test: Function formatUser", () => {
  const keys = ["name", "age", "major"];
  const title = "Mr/Mrs";
  let formattedUsers = [];

  beforeAll(async () => {
    formattedUsers = await formatUser(title);
  });

  test("Fungsi harus bisa format nama user", () => {
    formattedUsers.forEach((user) => {
      const { name } = user;
      expect(name).toContain(title);
    });
  });

  test("Fungsi mengembalikan array of object", () => {
    expect(formattedUsers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test("Semua object harus memiliki property: name, age, dan major", () => {
    formattedUsers.forEach((user) => {
      keys.forEach((key) => {
        expect(user).toHaveProperty(key);
      });
    });
  });
});

describe("# Menjalankan Test: Function findByName", () => {
  const name = "Aufa";
  const keys = ["name", "age", "major"];
  let foundUser = {};

  beforeAll(async () => {
    foundUser = await findByName(name);
  });

  test("Fungsi harus bisa mencari 1 user berdasarkan nama", () => {
    expect(foundUser.name).toContain(name);
  });

  test("Fungsi mengembalikan 1 data object bukan array", () => {
    expect(typeof foundUser).toEqual("object");
  });

  test("Object memiliki property: name, age, dan major", () => {
    keys.forEach((key) => {
      expect(foundUser).toHaveProperty(key);
    });
  });
});

describe("# Menjalankan Test: Function filterByMajor", () => {
  let filteredUsers = [];
  const keys = ["name", "age", "major"];
  const major = "English";

  beforeAll(async () => {
    filteredUsers = await filterByMajor(major);
  });

  test("Fungsi harus bisa mencari semua semua user berdasarkan major", () => {
    filteredUsers.forEach((user) => {
      expect(user.major).toContain(major);
    });
  });

  test("Fungsi mengembalikan array of object", () => {
    expect(filteredUsers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
          major: expect.any(String),
        }),
      ])
    );
  });

  test("Semua object memiliki property: name, age, dan major", () => {
    filteredUsers.forEach((user) => {
      keys.forEach((key) => {
        expect(user).toHaveProperty(key);
      });
    });
  });
});
