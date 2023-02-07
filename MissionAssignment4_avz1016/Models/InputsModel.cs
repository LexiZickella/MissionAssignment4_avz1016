using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MissionAssignment4_avz1016.Models
{
    public class InputsModel
    {
        [Required]
        public string assignments { get; set; }
        [Required]
        public string groupProject { get; set; }
        [Required]
        public string quizzes { get; set; }
        [Required]
        public string midtermExam { get; set; }
        [Required]
        public string finalExam { get; set; }
        [Required]
        public string intex { get; set; }
    }

}
