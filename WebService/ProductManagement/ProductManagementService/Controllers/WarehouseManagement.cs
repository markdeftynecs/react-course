using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductManagementService.Models;
using ProductManagementService.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagementService.Controllers
{   
    [ApiController]
    [Route("Warehouses")]
    public class WarehouseManagement : ControllerBase
    {
        private static ICollection<Warehouse> Warehouses = null;

        public WarehouseManagement()
        {
            if (Warehouses == null) { 
               LoadWarehouses(); 
            }
        }

        private async Task LoadWarehouses()
        {
            Warehouses = await WarehouseRepo.GetWarehouseAllAsync();
        }

        [HttpGet("{WarehouseId}")]
        [EnableCors]
        public IActionResult Get(int WarehouseId)
        {
            Warehouse wh = Warehouses.First(w => w.WarehouseId == WarehouseId);
            return Ok(wh);
        }

        [HttpGet("")]
        [EnableCors]
        public IActionResult Get()
        {
            return Ok(Warehouses);
        }
                
        [HttpPut("{WarehouseId}")]
        [EnableCors]
        public IActionResult Put([FromBody] Warehouse wh, int WarehouseId)
        {
            Warehouse whFound = Warehouses.First(w => w.WarehouseId == WarehouseId);
            Warehouses.Remove(whFound);
            Warehouses.Add(wh);

            foreach(Product p in ProductManagement.Products)
            {
                Warehouse whDelete = p.Warehouses.FirstOrDefault(w => w.WarehouseId == WarehouseId);
                if (whDelete != null)
                {
                    p.Warehouses.Remove(whDelete);
                    p.Warehouses.Add(wh);
                }
            }
            return Accepted(wh);
        }

        [HttpDelete("{WarehouseId}")]
        [EnableCors]
        public IActionResult Delete(int WarehouseId)
        {
            Warehouse whFound = Warehouses.First(w => w.WarehouseId == WarehouseId);
            Warehouses.Remove(whFound);

            foreach (Product p in ProductManagement.Products)
            {
                Warehouse whDelete = p.Warehouses.FirstOrDefault(w => w.WarehouseId == WarehouseId);
                p.Warehouses.Remove(whDelete);
            }

            return Accepted(whFound);
        }

        [HttpGet("Product/{ProductId}")]
        [EnableCors]
        public IActionResult Get(string ProductId)
        {
            IEnumerable<Warehouse> whs = Warehouses.Where(w => w.ProductId == int.Parse(ProductId));
            return Ok(whs);
        }
    }
}
