namespace ApiAmma.Models
{
    public class SugestaoModel
    {
        public int id { get; set; }
        public int idTipo { get; set; }
        public int idStatus { get; set; }
        public int idUsuario { get; set; }
        public UsuarioModel usuario { get; set; }
        public string data { get; set; }
        public string titulo { get; set; }
         public string descricao { get; set; }
        public int votos { get; set; }

    }
}
