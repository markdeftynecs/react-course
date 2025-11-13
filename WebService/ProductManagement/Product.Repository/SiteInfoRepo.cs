using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProductManagement.Common;

namespace ProductManagement.Repository
{
    public class SiteInfoRepo
    {
        public async static Task<SiteInfo> GetSiteInfoAsync(Site site)
        {
            SiteInfo si = new SiteInfo
            {
                SiteId = 1,
                SiteName = "Product Management",
                ContactEmail = "peter.vogel@phvis.com",
                ContactName = "Peter Vogel"
            };
            return await Task.FromResult(si);
        }
    }
}
