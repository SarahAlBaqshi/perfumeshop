//import perfumes from "../perfumes";
import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class PerfumeStore {
  perfumes = [];

  fetchPerfumes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/perfumes");
      this.perfumes = response.data;
    } catch (error) {
      console.error("PerfumeStore -> fetchPerfume -> error", error);
    }
  };

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

  deletePerfume = async (perfumeID) => {
    await axios.delete(`http://localhost:8000/perfumes/${perfumeID}`);
    this.perfumes = this.perfumes.filter((perfume) => perfume.id !== perfumeID);
  };
}

decorate(PerfumeStore, {
  perfumes: observable,
});

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;
