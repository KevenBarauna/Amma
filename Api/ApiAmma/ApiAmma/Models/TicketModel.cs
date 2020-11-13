using System.ComponentModel.DataAnnotations;

namespace ApiAmma.Models
{
    public class TicketModel
    {
        [Key]
        public int id { get; set; }
        public string titulo { get; set; }

    }
}
