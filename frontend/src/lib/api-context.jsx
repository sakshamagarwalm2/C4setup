"use client";

import { createContext, useContext, useState } from 'react';
import { getProducts } from './api';
import { useApi } from '@/hooks/use-api';

const ApiContext = createContext(null);

export function ApiProvider({ children }) {
  const { 
    data: products, 
    loading: productsLoading, 
    error: productsError,
    refetch: refetchProducts 
  } = useApi(getProducts);

  const value = {
    products,
    productsLoading,
    productsError,
    refetchProducts
  };

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
}