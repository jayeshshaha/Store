using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Store.Domain.Entities;

namespace Store.Infrastructure.Data
{
    public class StoreDbContext(DbContextOptions<StoreDbContext> options) : DbContext(options)
    {
        public DbSet<Product> Products { get; set; }

    }
}
