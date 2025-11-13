using Microsoft.AspNetCore.Mvc;
using ProductManagementService.Controllers;
using ProductManagementService.Models;
using System;
using System.Collections.Generic;
using Xunit;

namespace ProductManagementService.Test
{
    public class ProductsTest
    {
        [Fact]
        public void Delete423()
        {
            ProductManagement pm = new ProductManagement();

            IActionResult resp = pm.Delete(423);

            Assert.IsType<AcceptedResult>(resp);
            AcceptedResult ar = (AcceptedResult)resp;
            Assert.IsType<Product>(ar.Value);
            Product prod = (Product) ar.Value;
            Assert.Equal(423, prod.ProductId);

            IActionResult respCheck = pm.Get();
            ICollection<Product> prods = (ICollection<Product>) ((OkObjectResult) respCheck).Value;
            Assert.False(prods.Contains(prod));
        }
    }
}
