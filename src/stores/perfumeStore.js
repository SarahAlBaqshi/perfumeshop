import perfumes from "../perfumes";
import { decorate, observable } from "mobx";
import slugify from "react-slugify";

class PerfumeStore {
  perfumes = perfumes;

  createPerfume = (newPerfume) => {
    newPerfume.id = this.perfumes[this.perfumes.length - 1].id + 1;
    newPerfume.slug = slugify(newPerfume.name);
    this.perfumes.push(newPerfume);
  };

  updatePerfume = (updatedPerfume) => {
    console.log("CookieStore -> updateCookie -> updatedCookie", updatedPerfume);
    const perfume = this.perfumes.find(
      (perfume) => perfume.id === updatedPerfume.id
    );
    for (const key in perfume) perfume[key] = updatedPerfume[key];
  };

  deletePerfume = (perfumeID) => {
    this.perfumes = this.perfumes.filter((perfume) => perfume.id !== perfumeID);
  };
}

decorate(PerfumeStore, {
  perfumes: observable,
});

const perfumeStore = new PerfumeStore();

export default perfumeStore;
