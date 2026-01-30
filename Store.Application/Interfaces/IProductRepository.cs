using System;
using System.Collections.Generic;
using System.Text;
using Store.Domain.Entities;

namespace Store.Application.Interfaces
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProductsAsync();

        Task<(bool Exists, Product? Product)> GetProductAsync(int id);
    }
}
