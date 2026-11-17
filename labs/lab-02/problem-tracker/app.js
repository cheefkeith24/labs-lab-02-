const STATUSES = ["open", "in progress", "solved"];
const KEY = "problems";

let items = load();
let filter = "all";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
}

function renderCounts() {
  const open = items.filter(p => p.status !== "solved").length;
  document.getElementById("counts").textContent =
    open + " unsolved, " + (items.length - open) + " solved";
}

function renderFilters() {
  const box = document.getElementById("filters");
  box.innerHTML = "";
  ["all", ...STATUSES].forEach(s => {
    const b = document.createElement("button");
    b.textContent = s;
    if (s === filter) b.className = "active";
    b.onclick = () => { filter = s; render(); };
    box.appendChild(b);
  });
}

function renderItem(p) {
  const li = document.createElement("li");
  if (p.status === "solved") li.className = "solved";

  const top = document.createElement("div");
  top.className = "top";
  const title = document.createElement("span");
  title.className = "title";
  title.textContent = p.title;
  const tag = document.createElement("span");
  tag.className = "tag " + p.priority;
  tag.textContent = p.priority;
  top.append(title, tag);

  const actions = document.createElement("div");
  actions.className = "actions";
  const sel = document.createElement("select");
  sel.setAttribute("aria-label", "Status");
  STATUSES.forEach(s => {
    const o = document.createElement("option");
    o.value = s; o.textContent = s; o.selected = s === p.status;
    sel.appendChild(o);
  });
  sel.onchange = () => { p.status = sel.value; save(); render(); };
  const del = document.createElement("button");
  del.textContent = "Delete";
  del.onclick = () => { items = items.filter(x => x !== p); save(); render(); };
  actions.append(sel, del);

  li.append(top, actions);
  return li;
}

function render() {
  renderCounts();
  renderFilters();
  const list = document.getElementById("list");
  list.innerHTML = "";
  const shown = items.filter(p => filter === "all" || p.status === filter);
  if (!shown.length) {
    list.innerHTML = '<li class="empty">No problems here.</li>';
    return;
  }
  shown.forEach(p => list.appendChild(renderItem(p)));
}

document.getElementById("form").onsubmit = e => {
  e.preventDefault();
  const input = document.getElementById("title");
  const text = input.value.trim();
  if (!text) return;
  items.unshift({ title: text, priority: document.getElementById("priority").value, status: "open" });
  input.value = "";
  save();
  render();
};

render();
