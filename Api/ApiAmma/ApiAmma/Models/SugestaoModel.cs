namespace ApiAmma.Models
{
    public class SugestaoModel
    {
        public int id { get; set; }
        public int idUsuario { get; set; }
        public int idCategoria { get; set; }
        public int idStatus { get; set; }
        public string anonimo { get; set; }
        public string titulo { get; set; }
        public string descricao { get; set; }
        public int quantidadeVotos { get; set; }
        public string data { get; set; }
        public string notificacao { get; set; }
        public string justificativa { get; set; }

    }
}
