using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ProductManagementService.Models
{
    public class Warehouse
    {
        public int WarehouseId { get; set; }
        public int ProductId { get; set; }
        [Required(ErrorMessage = "All warehouse must be given a name reflecting their region.")]
        [StringLength(25, MinimumLength = 5, ErrorMessage = "Name must be between 5 and 25 characters.")]
        public string WarehouseName { get; set; }
        public bool International { get; set; }
        public Address Address { get; set; }
        [Required(ErrorMessage = "A quantity on hand must be provided.")]
        [Range(0,1000000, ErrorMessage = "Quantity on Hand can not be less than zero.")]
        public decimal Qoh { get; set; }
        public ICollection<InventoryTransaction> Transactions { get; set; }
    }
}
