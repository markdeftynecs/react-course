using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProductManagement.Common;

namespace ProductManagement.Repository
{
    public static class WarehouseRepo
    {
        private static List<Warehouse> whs;
        static WarehouseRepo()
        {
            whs = new List<Warehouse>() {
             new Warehouse
              {
                WarehouseId =  2,
                ProductId = 109,
                WarehouseName = "Eastern US",
                Address = new Address {
                            City = "Cincinnatti",
                            Country = "USA" },
                Qoh = 15,
                International = false
              },
             new Warehouse
              {
                WarehouseId =  3,
                ProductId = 109,
                WarehouseName = "Central Canada",
                Address = new Address {
                                City = "Regina",
                                Country = "Canada" },
                Qoh = 5,
                International = false
              },
             new Warehouse
              {
                WarehouseId =  4,
                ProductId = 109,
                WarehouseName = "Great Britain",
                Address = new Address {
                        City = "Liverpool",
                        Country = "United Kingdom" },
                Qoh = 81,
                International = true
              },
             new Warehouse
              {
                WarehouseId =  5,
                ProductId = 109,
                WarehouseName = "Scandanavia",
                Address = new Address {
                        City = "Karlskrona",
                        Country = "Sweden" },
                Qoh = 3,
                International = true
              }
            };
        }
        public static async Task<ICollection<Warehouse>> GetWarehousesForProductAsync(int ProductId)
        {
            return await Task.FromResult(whs);
        }
        public static async Task<Warehouse> GetWarehouseByIdAync(int wid)
        {
            return await Task.FromResult(whs.Find(w => w.WarehouseId == wid));
        }
    }
}
