

using Microsoft.EntityFrameworkCore;
using Store.Application.Interfaces;
using Store.Domain.Entities;
using Store.Infrastructure.Data;

namespace Store.Infrastructure.Repositories
{
    public class ProductRepository(StoreDbContext dbContext) : IProductRepository
    {
        public async Task<(bool Exists, Product? Product)> GetProductAsync(int id)
        {
            var product = await dbContext.Products.FindAsync(id);
            return (product != null, product);
        }

        public async Task<IEnumerable<Product>> GetProductsAsync()
        {
            return await dbContext.Products.ToListAsync();
        }
    }
}


