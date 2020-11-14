using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using FindMyRide.Core.Models;

namespace FindMyRide.Core.Data
{
    public class FindMyRideDbContext: DbContext, IFindMyRideDbContext
    {
        public FindMyRideDbContext(DbContextOptions options)
            :base(options) { }

        public static readonly ILoggerFactory ConsoleLoggerFactory
            = LoggerFactory.Create(builder => { builder.AddConsole(); });

        public DbSet<AutoLoanQuote> AutoLoanQuotes { get; private set; }
        public DbSet<Role> Roles { get; private set; }
        public DbSet<User> Users { get; private set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
