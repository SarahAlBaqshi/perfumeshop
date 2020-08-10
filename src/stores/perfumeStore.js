import { decorate, observable } from "mobx";
import instance from "./instance";
class PerfumeStore {
  perfumes = [];
  loading = true;

  fetchPerfumes = async () => {
    try {
      const response = await instance.get("/perfumes");
      this.perfumes = response.data;
      this.loading = false;
    } catch (error) {
      console.error("PerfumeStore -> fetchPerfume -> error", error);
    }
  };

  getPerfumeByID = (perfumeID) => {
    return this.perfumes.find((perfume) => perfume.id === perfumeID);
  };

  createPerfume = async (newPerfume, shop) => {
    try {
      const formData = new FormData();
      for (const key in newPerfume) formData.append(key, newPerfume[key]);
      const res = await instance.post(`/shops/${shop.id}/perfumes`, formData);
      const perfume = res.data;
      this.perfumes.push(perfume);
      shop.perfumes.push({ id: res.data.id });
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
      await instance.put(`/perfumes/${updatedPerfume.id}`, formData);
      // update in frontend
      const perfume = this.perfumes.find(
        (perfume) => perfume.id === updatedPerfume.id
      );
      for (const key in perfume) perfume[key] = updatedPerfume[key];
      perfume.image = URL.createObjectURL(updatedPerfume.image);
    } catch (error) {
      console.log("PerfumeStore -> UpdatePerfume => error", error);
    }
  };

  deletePerfume = async (perfumeID) => {
    await instance.delete(`/perfumes/${perfumeID}`);
    this.perfumes = this.perfumes.filter((perfume) => perfume.id !== perfumeID);
  };
}

decorate(PerfumeStore, {
  perfumes: observable,
  loading: observable,
});

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;
