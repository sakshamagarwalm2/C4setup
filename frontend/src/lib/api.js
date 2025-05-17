/**
 * API service for making requests to the backend
 */

const API_URL = 'http://localhost:5000/api';

/**
 * Fetch products from the API
 * @returns {Promise<Array>} Products array
 */
export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Submit an enquiry to the API
 * @param {Object} enquiryData - The enquiry data
 * @returns {Promise<Object>} The created enquiry
 */
export async function submitEnquiry(enquiryData) {
  try {
    const response = await fetch(`${API_URL}/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiryData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit enquiry');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error submitting enquiry:', error);
    throw error;
  }
}