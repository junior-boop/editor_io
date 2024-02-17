class p {
  constructor({ data: n, config: e, api: i, block: s, readOnly: c }) {
    this.data = n, this.config = e, this.api = i, this.block = s, this.readOnly = c, this.nodes = {
      wrapper: null
    }, this._data = null, this._element, this._css = {
      block: this.api.styles.block,
      wrapper: "ce-titre"
    }, this._placeholder = "Entrez votre text";
  }
  static get toolbox() {
    return {
      title: "Grand Titre",
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="white"/><path d="M11 19.3172V5.8" stroke="black" stroke-width="1.5"/><path d="M14 14.0069L17 13.0414V19.8" stroke="black" stroke-width="1.5"/><path d="M6 7.73104V5.8H16V7.73104" stroke="black" stroke-width="1.5"/><path d="M13 19.3172H9" stroke="black" stroke-width="1.5"/></svg>'
    };
  }
  onKeyUp(n) {
    if (n.code !== "Backspace" && n.code !== "Delete")
      return;
    let e;
    this._element !== void 0 && (e = this._element.textContent), e === "" && (this._element.innerHTML = "");
  }
  handleLinkComponent(n, e) {
    const i = document.createElement("div");
    i.classList.add("ce-link-content-2");
    const s = document.createElement("img");
    s.classList.add("ce-link-img"), e.images && e.images.length !== 0 && (s.src = e.images[0], i.appendChild(s));
    const c = document.createElement("div");
    c.classList.add("content");
    const l = document.createElement("div");
    l.classList.add("ce-link-left");
    const o = document.createElement("div");
    o.classList.add("ce-link-titre"), o.innerText = e == null ? void 0 : e.title;
    const t = document.createElement("div");
    t.classList.add("ce-link-sitename"), t.innerText = e == null ? void 0 : e.sitename;
    const d = document.createElement("div");
    d.classList.add("ce-link-description"), d.innerText = e == null ? void 0 : e.description;
    const r = document.createElement("div");
    r.classList.add("ce-link-domaine"), r.innerText = e == null ? void 0 : e.domain;
    const h = document.createElement("img");
    h.classList.add("ce-link-right"), h.src = e == null ? void 0 : e.favicon, l.appendChild(o), l.appendChild(t), l.appendChild(d), l.appendChild(r), c.appendChild(l), c.appendChild(h), i.appendChild(c), n.appendChild(i);
  }
  render() {
    const n = document.createElement("div");
    n.classList.add("block-link");
    const e = document.createElement("div");
    e.classList.add("ce-link-content");
    const i = document.createElement("input");
    i.type = "url", i.required = !0;
    const s = document.createElement("button");
    return s.innerText = "Check", e.appendChild(i), e.appendChild(s), n.appendChild(e), s.addEventListener("click", () => {
      const c = i.value, l = "pk_a2a83da325988b6b15194d3b3cfda82ddf579039", o = "https://jsonlink.io/api/extract?url=" + c + "&api_key=" + l;
      fetch(o).then((t) => {
        if (!t.ok)
          throw new Error(`Error: ${t.status} - ${t.statusText}`);
        return t.json();
      }).then((t) => {
        if (t) {
          const d = {
            titre: t.title,
            desc: t.description,
            sitename: t.sitename,
            images: t.images,
            favicon: t.favicon,
            domaine: t.domain
          };
          this._data = d, e.style.display = "none", this.handleLinkComponent(n, t);
        }
      }).catch((t) => {
        console.error("An error occurred:", t);
      });
    }), this.data.hasOwnProperty("data") && (console.log(this.data), e.style.display = "none", this.handleLinkComponent(n, this.data), this._data = this.data), n;
  }
  save() {
    return {
      data: this._data
    };
  }
}
export {
  p as default
};
