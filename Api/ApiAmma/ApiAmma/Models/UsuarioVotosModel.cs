using System.ComponentModel.DataAnnotations;

namespace ApiAmma.Models
{
    public class UsuarioVotosModel
    {
        [Key]
        public int id { get; set; }
        public int idTicket { get; set; }
        public int idUsuario { get; set; }
        public UsuarioModel usuario { get; set; }

    }
}
