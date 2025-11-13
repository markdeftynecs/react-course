using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductManagementService.Repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SiteInfoManagementService.Controllers
{
    [ApiController]
    [Route("SiteInfo")]
    [EnableCors]
    public class SiteInfoManagement : ControllerBase
    {
        [Route("{siteId}")]
        public async Task<IActionResult> Get(int siteId)
        {
            return Ok(await SiteInfoRepo.GetSiteInfoAsync(siteId));
        }

    }
}
