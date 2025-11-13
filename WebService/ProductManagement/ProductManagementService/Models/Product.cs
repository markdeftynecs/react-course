using System;
using System.Collections.Generic;

namespace ProductManagementService.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public bool InStock { get; set; }
        public DateTime LastDelivery { get; set; }
        public decimal TotalQuantity { get; set; }
        public ICollection<Warehouse> Warehouses { get; set; }
    }
}
