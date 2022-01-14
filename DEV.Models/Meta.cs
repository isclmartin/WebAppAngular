namespace DEV.Models
{
    public class Meta
    {
        public Pagination Pagination { get; set; }
    }

    public class Pagination
    {
        public int Total { get; set; }

        public int Pages { get; set; }

        public int Page { get; set; }

        public int Limit { get; set; }

        public Links Links { get; set; }
    }

    public class Links
    {
        public string Previous { get; set; }

        public string Current { get; set; }

        public string Next { get; set; }
    }
}
