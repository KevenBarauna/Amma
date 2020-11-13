using System.ComponentModel.DataAnnotations;

namespace ApiAmma.Models
{
    public class StatusModel
    {
        [Key]
        public int id { get; set; }
        public string tipo { get; set; }
        
    }
}
