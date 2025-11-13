using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProductManagementService.Models;

namespace ProductManagementService.Repos
{
    public static class WarehouseRepo
    {
        private static List<Warehouse> whs;
        static WarehouseRepo()
        {
            whs = new List<Warehouse>() {
             new Warehouse
              {
                WarehouseId =  1,
                ProductId = 109,
                WarehouseName = "Eastern US",
                Address = new Address {
                            City = "Pittsburg",
                            Street = "63 Overlea",
                            Country = "USA" },
                Qoh = 15,
                International = false
              },
             new Warehouse
              {
                WarehouseId =  2,
                ProductId = 387,
                WarehouseName = "Central US",
                Address = new Address {
                                City = "Cincinnatti",
                                Street = "500 Ridout St.",
                                Country = "USA" },
                Qoh = 5,
                International = false
              },
             new Warehouse
              {
                WarehouseId = 3,
                ProductId = 109,
                WarehouseName = "Central Canada",
                Address = new Address {
                                City = "Regina",
                                Street = "3341 Rae St.",
                                Country = "Canada" },
                Qoh = 5,
                International = true
              },
             new Warehouse
              {
                WarehouseId =  4,
                ProductId = 387,
                WarehouseName = "Great Britain",
                Address = new Address {
                                City = "Manchester",
                                Street = "424 Overlea",
                                 Country = "Sweden" },
                Qoh = 15,
                International = true
              },
             new Warehouse
              {
                WarehouseId =  5,
                ProductId = 387,
                WarehouseName = "Scandanavia",
                Address = new Address {
                                City = "Stockholm",
                                Street = "408 Durand",
                                Country = "Sweden" },
                Qoh = 213,
                International = true
              },
             new Warehouse
              {
                WarehouseId =  6,
                ProductId = 423,
                WarehouseName = "South America",
                Address = new Address {
                                City = "Rio de Janeiro",
                                Street = "53 St. Patrick",
                                Country = "Brazil" },
                Qoh = 112,
                International = true
              },
             new Warehouse
              {
                WarehouseId =  7,
                ProductId = 387,
                WarehouseName = "East Asia",
                Address = new Address {
                                City = "Hong Kong",
                                Street = "2322 Colborne",
                                Country = "China" },
                Qoh = 5,
                International = true
              }

            };
        }
        public static async Task<ICollection<Warehouse>> GetWarehousesForProductAsync(int ProductId)
        {
            return await Task.FromResult(whs.FindAll(w => w.ProductId == ProductId));
        }
        public static async Task<Warehouse> GetWarehouseByIdAync(int warehouseId)
        {
            return await Task.FromResult(whs.Find(w => w.WarehouseId == warehouseId));
        }
        public static async Task<ICollection<Warehouse>> GetWarehouseAllAsync()
        {
            return await Task.FromResult(whs);
        }

        public static Warehouse Update(Warehouse whse)
        {
            Warehouse wh = whs.Find(w => w.WarehouseId == whse.WarehouseId);
            whs.Remove(wh);
            whs.Add(whse);
            return whse;
        }

        public static Warehouse Delete(int warehouseId)
        {
            Warehouse wh = whs.Find(w => w.WarehouseId == warehouseId);
            whs.Remove(wh);
            return wh;
        }

        public static Warehouse Add(Warehouse whse)
        {
            whs.Add(whse);
            return whse;
        }
    }
}
