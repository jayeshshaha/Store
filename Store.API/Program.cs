
using Microsoft.EntityFrameworkCore;
using Store.Application.Interfaces;
using Store.Infrastructure.Data;
using Store.Infrastructure.Repositories;

namespace Store.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<StoreDbContext>(options => 
            options.UseSqlite(builder.Configuration.GetConnectionString("Default")));

            builder.Services.AddScoped<IProductRepository, ProductRepository>();

            builder.Services.AddCors();

            builder.Services.AddControllers();

            var app = builder.Build();

            app.UseCors(option =>
            {
                option.AllowAnyHeader()
                .AllowAnyMethod()
                .WithOrigins("https://localhost:3000");
            });

            app.MapControllers();

            app.Run();
        }
    }
}
