using Microsoft.EntityFrameworkCore;
using FindMyRide.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace FindMyRide.Core.Data
{
    public interface IFindMyRideDbContext
    {
        DbSet<AutoLoanQuote> AutoLoanQuotes { get; }
        DbSet<Role> Roles { get; }
        DbSet<User> Users { get; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
