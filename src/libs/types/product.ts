import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enums";

export interface ProductInput {
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage?: string[];
  productView?: number;
}
