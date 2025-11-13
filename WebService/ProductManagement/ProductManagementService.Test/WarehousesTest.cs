using Microsoft.AspNetCore.Mvc;
using ProductManagementService.Controllers;
using ProductManagementService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace ProductManagementService.Test
{
    public class WarehousesTest
    {
        [Fact]
        public void Update1()
        {
            WarehouseManagement wm = new WarehouseManagement();
            Warehouse whMock = new Warehouse
            {
                Address = new Address
                {
                    City = "London",
                    Country = "Canada",
                    Street = "Ridout"
                },
                International = false,
                ProductId = 423,
                Qoh = 42,
                WarehouseId = 1,
                WarehouseName = "Southwest Ontario"
            };
            ProductManagement pm = new ProductManagement();

            IActionResult resp = wm.Put(whMock, whMock.WarehouseId);

            Assert.IsType<AcceptedResult>(resp);
            AcceptedResult ar = (AcceptedResult)resp;
            Assert.IsType<Warehouse>(ar.Value);
            Warehouse whReturned = (Warehouse) ar.Value;
            Assert.Equal(1, whReturned.WarehouseId);
            Assert.Equal(423, whReturned.ProductId);

            IActionResult respCheck = wm.Get();
            ICollection<Warehouse> whs = (ICollection<Warehouse>)((OkObjectResult)respCheck).Value;
            Warehouse whCheck = whs.First(w => w.WarehouseId == whMock.WarehouseId);
            Assert.Equal(423, whCheck.ProductId);
        }
    }
}
