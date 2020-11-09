namespace ApiAmma.Models
{
    public class StatusModel
    {
        public int id { get; set; }
        public int idTicket { get; set; }
        public int idUsuario { get; set; }
        public UsuarioModel usuario { get; set; }

    }
}
