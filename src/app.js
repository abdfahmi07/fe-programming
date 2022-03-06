/**
 * TODO 7.
 * Import fungsi formatUser, findByName, fildetByMajor
 * dari file controllers/UserController.js
 */
// CODE HERE
import {
  formatUser,
  findByName,
  filterByMajor,
} from "./controllers/UserController";
/**
 * Fungsi Main.
 * Jangan edit atau hapus fungsi main.
 * Fungsi main untuk testing aplikasi.
 */
(async () => {
  console.log("# Format User: Mr/Mrs");
  const resultFormatUsers = await formatUser("Mr/Mrs");
  console.log(resultFormatUsers);

  console.log("\n# Find User by Name: Aufa");
  const resultFindByName = await findByName("Aufa");
  console.log(resultFindByName);

  console.log("\n# Filter User by Major: English");
  const resultFilterByMajor = await filterByMajor("English");
  console.log(resultFilterByMajor);
})();
