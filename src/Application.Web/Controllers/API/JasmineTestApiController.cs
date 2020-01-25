using System.Web.Http;

namespace Application.Web.Controllers
{
    public class JasmineTestApiController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            var rand = new System.Random();

            return Json(new { no = rand.Next(0, 1_000_000) });
        }
    }
}
