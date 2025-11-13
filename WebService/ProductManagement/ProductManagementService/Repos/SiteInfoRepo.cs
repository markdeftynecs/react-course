using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProductManagementService.Models;

namespace ProductManagementService.Repos
{
    public class SiteInfoRepo
    {
        public async static Task<SiteInfo> GetSiteInfoAsync(int siteId)
        {
            SiteInfo si = new SiteInfo
            {
                SiteId = siteId,
                SiteName = "Product Management",
                ContactEmail = "peter.vogel@phvis.com",
                ContactName = "Peter Vogel"
            };
            return await Task.FromResult(si);
        }
    }
}
