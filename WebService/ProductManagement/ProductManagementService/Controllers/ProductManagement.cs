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
    [Route("Products")]
    public class ProductManagement : ControllerBase
    {
        internal static ICollection<Product> Products = null;

        public ProductManagement()
        {
            if (Products == null)
            {
                LoadProducts();
            }
        }

        private async Task LoadProducts() 
        {
            Products = await ProductRepo.GetAllAsync();
        }

        [HttpGet("{ProductId}")]
        [EnableCors]
        public IActionResult Get(int ProductId)
        {
            Product prod = Products.First(p => p.ProductId == ProductId);
            return Ok(prod);
        }

        [HttpGet("")]
        [EnableCors]
        public IActionResult Get()
        {
            return Ok(Products);
        }

        [HttpPut("{ProductId}")]
        [EnableCors]
        public IActionResult Put([FromBody] Product prod, int ProductId)
        {
            Product prodReturned = Products.First(p => p.ProductId == ProductId);
            Products.Remove(prodReturned);
            Products.Add(prod);
            return Accepted(prod); 
        }

        [HttpDelete("{ProductId}")]
        [EnableCors]
        public IActionResult Delete(int ProductId)
        {
            Product prodReturned = Products.First(p => p.ProductId == ProductId);
            Products.Remove(prodReturned);
            return Accepted(prodReturned);
        }

        [HttpPost]
        [EnableCors]
        public IActionResult Post([FromBody] Product prod)
        {
            Products.Add(prod);
            return Ok(prod);
        }
    }
}
