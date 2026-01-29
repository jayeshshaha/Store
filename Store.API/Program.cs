
using Microsoft.EntityFrameworkCore;
using Store.Infrastructure.Data;

namespace Store.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<StoreDbContext>(options => 
            options.UseSqlite(builder.Configuration.GetConnectionString("Default")));

            builder.Services.AddControllers();

            var app = builder.Build();  

            app.MapControllers();

            app.Run();
        }
    }
}
