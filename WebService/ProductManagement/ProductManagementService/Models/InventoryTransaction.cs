using ProductManagementService.Models;

namespace ProductManagementService.Models
{
    public class InventoryTransaction
    {
        public int TransactionId { get; set; }
        public int ProductId { get; set; }
        public int WarehouseId { get; set; }
        public TransactionType TransactionType { get; set; }
        public decimal Amount { get; set; }
    }
}