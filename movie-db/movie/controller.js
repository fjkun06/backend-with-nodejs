import { form } from "./form.js";
import { getAll, remove, get, save } from "./model.js";
import { render } from "./view.js";

export async function listAction(req, res) {
  const data = await getAll();
  const body = render(data);
  res.send(body);
}

export const removeAction = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await remove(id);
  res.redirect(req.baseUrl);
};

export const formAction = async (req, res) => {
  let movie = { id: "", title: "", year: "" };
  if (req.params.id) {
    movie = await get(parseInt(req.params.id, 10));
  }

  const body = form(movie);
  res.send(body);
};

export const saveAction = async (req, res) => {
  const { id, title, year } = req.body;
  const movie = { id, title, year };
  await save(movie);

  res.redirect(req.baseUrl);
};
