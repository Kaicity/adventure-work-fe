import { axiosClient } from '.';

export async function getSalesPercentageByCategory(year?: number) {
  try {
    const response = await axiosClient.get('/api/sales-percentage-by-year', {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getTopProductsByRevenue(year?: number) {
  try {
    const response = await axiosClient.get('/api/top-products-by-revenue', {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getYearlySalesByCityAndCategory(year?: number) {
  try {
    const response = await axiosClient.get(
      '/api/yearly-sales-by-city-and-category',
      { params: { year } }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
export async function getTotalSalesInYear(year?: number) {
  try {
    const response = await axiosClient.get('/api/total-sales-year', {
      params: { year }
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}
