using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProductManagementService.Models;
using ProductManagementService.Repos;

namespace ProductManagementService.Repos
{
    public static class ProductRepo
    {
        static bool loaded = false;
        static List<Product> prods = new List<Product>
        {
            new Product {
                ProductId = 109,
                ProductName = "Widget",
                LastDelivery = DateTime.Now.AddDays(-2),
                InStock = true
            },

            new Product {
                        ProductId = 423,
                        ProductName = "Sprocket",
                        LastDelivery = DateTime.Now.AddYears(-12),
                        InStock = true
             },

            new Product {
                            ProductId = 387,
                            ProductName = "Doodad",
                            LastDelivery = DateTime.Now,
                            InStock = true
             }
        };        
        
        public static async void LoadWarehouses()
        {
            foreach (Product prod in prods)
            {
                prod.Warehouses = await WarehouseRepo.GetWarehousesForProductAsync(prod.ProductId);
                foreach (Warehouse w in prod.Warehouses)
                {
                    prod.TotalQuantity += w.Qoh;
                }
            }
            
        }

        public async static Task<ICollection<Product>> GetAllAsync()
        {
            if (!loaded)
            {
                LoadWarehouses();
                loaded = true;
            }
            return await Task.FromResult(prods);
        }

        public static async Task<Product> GetProductByIdAsync(int ProductId)
        {
            if (!loaded)
            {
                LoadWarehouses();
                loaded = true;
            }
            Product prod = prods.Find(p => p.ProductId == ProductId);         
            return await Task.FromResult(prod);
        }

        public static Product Update(Product prod)
        {
            if (!loaded)
            {
                LoadWarehouses();
                loaded = true;
            }
            Product product = prods.Find(p => p.ProductId == prod.ProductId);
            prods.Remove(product);
            prods.Add(prod);
            return prod;
        }

        public static Product Delete(int prodId)
        {
            if (!loaded)
            {
                LoadWarehouses();
                loaded = true;
            }
            Product product = prods.Find(p => p.ProductId == prodId);
            prods.Remove(product);
            return product;
        }

        public static Product Add(Product prod)
        {
            if (!loaded)
            {
                LoadWarehouses();
                loaded = true;
            }
            prods.Add(prod);
            return prod;
        }
    }
}