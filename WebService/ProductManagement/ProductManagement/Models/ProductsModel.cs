using Microsoft.AspNetCore.Components;
using ProductManagement.Common;
using ProductManagement.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductManagement.Models
{
    public class ProductsModel : ComponentBase
    {
        public Product prod;
        protected async override Task OnInitializedAsync()
        {
            prod = await ProductRepo.GetProductByIdAsync(109);
            await base.OnInitializedAsync();
        }
        protected void UpdateLastDelivery()
        {
            prod.LastDelivery = DateTime.Now;
        }

        protected string msg;
        public void ReportInventoryChanged(Warehouse wh)
        {
            msg = $"Warehouse {wh.WarehouseName} has updated its quantity on hand to {wh.Qoh}.";
            prod.TotalQuantity = prod.Warehouses.Sum(w => w.Qoh);
            StateHasChanged();
        }
    }
}
