using Microsoft.AspNetCore.Mvc;
using MissionAssignment4_avz1016.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MissionAssignment4_avz1016.Controllers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Inputs ()
        {
            return View();
        }
        [HttpPost] // attribute we are attaching to the method
        public IActionResult Inputs (InputsModel model)
        {
            return View();
        }
    }
}
