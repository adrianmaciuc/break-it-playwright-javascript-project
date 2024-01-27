import { test, expect } from "@playwright/test";

test("Get", async ({ request }) => {
  const response = await await request.get(
    "https://martioli.com/apifortesting"
  );
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
});

let id;
test("CREATE", async ({ request }) => {
  const newData = {
    developer: "Imaginatie",
    QA: "Distrugere",
    manager: "Sefu",
    automation: "Yes",
    task: "Faceti bani",
    story_points: 10,
  };

  const response = await request.post("https://martioli.com/apifortesting", {
    data: newData,
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  id = data.id;
  expect(data.QA).toBe(newData.QA);
});

test("PATCH", async ({ request }) => {
  const dataChange = { QA: "Testarica", task: "distrugeti" };
  const response = await request.patch(
    `https://martioli.com/apifortesting/id/${id}`,
    { data: dataChange }
  );
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.QA).toBe(dataChange.QA);
  expect(data.task).toBe(dataChange.task);
});

test("PUT", async ({ request }) => {
  const dataChange = {
    developer: "Ghita",
    QA: "Developer-ul",
    manager: "Angajam",
    automation: "nu promitem",
    task: "Proiect bun",
    story_points: 10,
  };
  const response = await request.put(
    `https://martioli.com/apifortesting/id/${id}`,
    { data: dataChange }
  );
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.QA).toBe(dataChange.QA);
  expect(data.task).toBe(dataChange.task);
});

test("DELETE", async ({ request }) => {
  const response = await request.delete(
    `https://martioli.com/apifortesting/id/${id}`
  );
  expect(response.ok()).toBeTruthy();
});
