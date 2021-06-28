namespace ApiAmma.Models
{
    public class ResponseModel
    {
        public bool isError { get; set; }
        public string type { get; set; }
        public string error { get; set; }
        public object response { get; set; }
    }
}
