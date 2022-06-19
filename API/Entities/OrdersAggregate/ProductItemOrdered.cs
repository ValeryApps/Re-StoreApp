using Microsoft.EntityFrameworkCore;

namespace API.Entities.OrdersAggregate
{
    [Owned]
    public class ProductItemOrdered
    {
        public int ProductId { get; set; }

        public string? Name { get; set; }

        public string? PictureUrl { get; set; }


    }
}