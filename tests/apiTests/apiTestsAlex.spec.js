import { test, expect } from "@playwright/test";

test("CRUD Operations", async ({ request }) => {
  // GET
  const getResponse = await request.get("https://martioli.com/apifortesting");
  expect(getResponse.ok()).toBeTruthy();
  const initialData = await getResponse.json();

  // CREATE
  const newData = {
    developer: "Imaginatie",
    QA: "Distrugere",
    manager: "Sefu",
    automation: "Yes",
    task: "Faceti bani",
    story_points: 10,
  };

  const createResponse = await request.post("https://martioli.com/apifortesting", {
    data: newData,
  });
  expect(createResponse.ok()).toBeTruthy();
  const createdData = await createResponse.json();
  expect(createdData.QA).toBe(newData.QA);

  // PATCH
  const dataChangePatch = { QA: "Testarica", task: "distrugeti" };
  const patchResponse = await request.patch(
    `https://martioli.com/apifortesting/id/${createdData.id}`,
    { data: dataChangePatch }
  );
  expect(patchResponse.ok()).toBeTruthy();
  const patchedData = await patchResponse.json();
  expect(patchedData.QA).toBe(dataChangePatch.QA);
  expect(patchedData.task).toBe(dataChangePatch.task);

  // PUT
  const dataChangePut = {
    developer: "Ghita",
    QA: "Developer-ul",
    manager: "Angajam",
    automation: "nu promitem",
    task: "Proiect bun",
    story_points: 10,
  };
  const putResponse = await request.put(
    `https://martioli.com/apifortesting/id/${createdData.id}`,
    { data: dataChangePut }
  );
  expect(putResponse.ok()).toBeTruthy();
  const putData = await putResponse.json();
  expect(putData.QA).toBe(dataChangePut.QA);
  expect(putData.task).toBe(dataChangePut.task);

  // DELETE
  const deleteResponse = await request.delete(
    `https://martioli.com/apifortesting/id/${createdData.id}`
  );
  expect(deleteResponse.ok()).toBeTruthy();
});
