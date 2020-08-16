import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class ShopStore {
  shops = [];
  loading = true;

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ShopStore -> fetchShop -> error", error);
    }
  };

  createShop = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await instance.post(`/shops`, formData);
      this.shops.push(res.data);
      authStore.user.shopSlug = res.data.slug;
    } catch (error) {
      console.log("shopStore -> createShop -> error", error);
    }
  };

  updateShop = async (updatedShop) => {
    try {
      const formData = new FormData();
      for (const key in updatedShop) formData.append(key, updatedShop[key]);

      //update in the backend
      await instance.put(`/shops/${updatedShop.id}`, formData);
      // update in frontend
      const shop = this.shops.find((shop) => shop.id === updatedShop.id);
      for (const key in updatedShop) shop[key] = updatedShop[key];
    } catch (error) {
      console.log("ShopStore -> UpdateShop => error", error);
    }
  };

  deleteShop = async (shopId) => {
    await instance.delete(`/shops/${shopId}`);
    this.shops = this.shops.filter((shop) => shop.id !== shopId);
  };
}

decorate(ShopStore, {
  shops: observable,
  loading: observable,
});

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;
