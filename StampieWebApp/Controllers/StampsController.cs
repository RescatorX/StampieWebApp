using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using StampieWebApp.Entities;

namespace StampieWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StampsController : ControllerBase
    {
        private string StampsDownloadUrl = "https://www.turisticke-znamky.cz/export.php?item=1&type=csv";

        [HttpGet("[action]")]
        public IEnumerable<Stamp> DownloadStamps()
        {
            List<Stamp> stamps = new List<Stamp>();

            WebRequest request = WebRequest.Create(this.StampsDownloadUrl);

            using (var response = request.GetResponse())
            using (var str = response.GetResponseStream())
            using (var rdr = new StreamReader(str))
            {
                string line;
                if (rdr.ReadLine() != null)
                {
                    while ((line = rdr.ReadLine()) != null)
                    {
                        stamps.Add(new Stamp(line));
                    }
                }
            }

            return stamps;
        }
    }
}