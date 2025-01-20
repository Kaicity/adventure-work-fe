import { axiosClient } from '.';
import type { Product } from '@/app/models/product';

export async function getProductionCostByLocation(year?: number) {
  try {
    const response = await axiosClient.get(`/api/production-cost-by-location`, {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductsCompletedByYear() {
  try {
    const response = await axiosClient.get(`/api/products-completed-by-year`);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getProductionEfficiencyByYear() {
  try {
    const response = await axiosClient.get(
      `/api/production-efficiency-by-year`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getDefectiveProductsRate(year?: number) {
  try {
    const response = await axiosClient.get(`/api/defective-products-rate`, {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getTop10ProductsProduced(year?: number) {
  try {
    const response = await axiosClient.get(`/api/top-10-products-produced`, {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
