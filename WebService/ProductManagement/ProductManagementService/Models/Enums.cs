using System;
using System.Collections.Generic;
using System.Text;

namespace ProductManagementService.Models
{ 
    public enum Site
    {
        ProductManagement,
        Sales,
        HR
    }

    public enum TransactionType
    {
        AddStock,
        RemoveStock
    }
}
