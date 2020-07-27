import { decorate, observable } from "mobx";
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

  createPerfume = async (newPerfume) => {
    try {
      const formData = new FormData();
      for (const key in newPerfume) formData.append(key, newPerfume[key]);
      const res = await axios.post("http://localhost:8000/perfumes", formData);
      this.perfumes.push(res.data);
    } catch (error) {
      console.log("perfumeStore -> createPerfume -> error", error);
    }
  };

  updatePerfume = async (updatedPerfume) => {
    try {
      const formData = new FormData();
      for (const key in updatedPerfume)
        formData.append(key, updatedPerfume[key]);

      //update in the backend
      await axios.put(
        `http://localhost:8000/perfumes/${updatedPerfume.id}`,
        formData
      );
      // update in frontend
      const perfume = this.perfumes.find(
        (perfume) => perfume.id === updatedPerfume.id
      );
      for (const key in perfume) perfume[key] = updatedPerfume[key];
    } catch (error) {
      console.log("PerfumeStore -> UpdatePerfume => error", error);
    }
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
