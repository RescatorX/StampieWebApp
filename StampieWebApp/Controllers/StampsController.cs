using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StampieWebApp.Entities;

namespace StampieWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StampsController : ControllerBase
    {
        private string StampsDownloadUrl = "https://www.turisticke-znamky.cz/export.php?item=1&type=csv";

        [HttpGet("[action]")]
        public async Task<ActionResult<Stamp[]>> /*IEnumerable<Stamp>*/ DownloadStamps()
        {
            List<Stamp> stamps = new List<Stamp>();

            try
            {
                JsonSerializer serializer = new JsonSerializer();
                List<Stamp> jsonStamps = null;
                using (FileStream fileStream = System.IO.File.Open(Path.Combine(Directory.GetCurrentDirectory(), @"Resources\stamps.json"), FileMode.Open))
                using (StreamReader streamReader = new StreamReader(fileStream))
                using (JsonReader reader = new JsonTextReader(streamReader))
                {
                    while (!streamReader.EndOfStream)
                    {
                        jsonStamps = serializer.Deserialize<List<Stamp>>(reader);
                    }
                }

                if ((jsonStamps != null) && (jsonStamps.Count > 0))
                {
                    stamps = jsonStamps;
                }
                else
                {
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

                    // serialize JSON directly to a file
                    using (StreamWriter file = System.IO.File.CreateText(Path.Combine(Directory.GetCurrentDirectory(), @"Resources\stamps.json")))
                    {
                        serializer.Serialize(file, stamps);
                    }
                }
            }
            catch { }

            return stamps.ToArray();
        }
    }
}