export class StorageWorker {
  #currentID = 0;
  #key = "form-data";

  constructor() {
    const data = this.getData();
    const lastItem = data?.at(-1)?.id;
    this.#currentID = lastItem ? lastItem + 1 : 1;
  }

  getData = () => {
    const data = localStorage.getItem(this.#key);
    return data ? JSON.parse(data) : [];
  };

  saveItem = (item, status) => {
    const data = this.getData();
    const newItem = { ...item, id: this.#currentID, status: status };
    data.push(newItem);
    localStorage.setItem(this.#key, JSON.stringify(data));
    this.#currentID += 1;
    return data.at(-1);
  };

  changeItem = (id, updatedValues) => {
    const data = this.getData();
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...updatedValues } : item,
    );
    localStorage.setItem(this.#key, JSON.stringify(updatedData));
  };

  resetID = () => {
    this.#currentID = 1;
  };

  deleteItem = (id) => {
    const data = this.getData();
    const findItem = data.findIndex((element) => element.id === id);
    data.splice(findItem, 1);
    localStorage.setItem(this.#key, JSON.stringify(data));
    if (data.length === 0) this.resetID();
    return findItem;
  };

  showItem = (id) => {
    const data = this.getData();
    const findItem = data.find((element) => element.id === id);
    return findItem;
  };
}

const storageWorker = new StorageWorker();
export default storageWorker;
