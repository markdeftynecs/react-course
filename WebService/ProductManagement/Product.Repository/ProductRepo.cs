using System;
using System.Threading.Tasks;
using ProductManagement.Common;

namespace ProductManagement.Repository
{
    public class ProductRepo
    {
        public static async Task<Product> GetProductByIdAsync(int ProductId)
        {
            Product prod = null;
            switch (ProductId)
            {
                case 109:
                    prod = new Product
                    {
                        ProductId = 109,
                        ProductName = "Widget",
                        LastDelivery = DateTime.Now.AddDays(-2),
                        Warehouses = await WarehouseRepo.GetWarehousesForProductAsync(109),
                        InStock = true,
                        TotalQuantity = 104
                    };
                    break;
                case 423:
                    prod = new Product
                    {
                        ProductId = 423,
                        ProductName = "Sprocket",
                        LastDelivery = DateTime.Now.AddYears(-2),
                        Warehouses = await WarehouseRepo.GetWarehousesForProductAsync(109),
                        InStock = true,
                        TotalQuantity = 104
                    };
                    break;
                case 387:
                        prod = new Product
                        {
                            ProductId = 387,
                            ProductName = "Doodad",
                            LastDelivery = DateTime.Now,
                            Warehouses = await WarehouseRepo.GetWarehousesForProductAsync(109),
                            InStock = true,
                            TotalQuantity = 104
                        };
                        break;
            };
            return await Task.FromResult(prod);
        }
    }
}
