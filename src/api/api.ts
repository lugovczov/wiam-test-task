import axios from 'axios';

export const fetchWorkspaceOptions = async (): Promise<string[]> => {
  const response = await axios.get('https://dummyjson.com/products/category-list');
  return response.data;
};

export const submitApplication = async (firstName: string, lastName: string): Promise<any> => {
  const response = await axios.post('https://dummyjson.com/products/add', {
    title: `${firstName} ${lastName}`
  });
  return response.data;
};